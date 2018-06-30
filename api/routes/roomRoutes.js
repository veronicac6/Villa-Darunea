'use strict';

const config = require('../../config/database');
const express = require('express');
const router = express.Router();
const RoomSchema = require('../models/roomModel');
const VillaSchema = require('../models/villaModel');

//-----------------------------------------------------
// http://localhost:3000/rooms/new
router.post('/new', function(req, res) {

  let newRoom = new RoomSchema({
    name: req.body.name,
    capacity: req.body.capacity,
    villa: req.body.villa,
    price: req.body.price,
    reservations: req.body.reservations
  });

  let responseSchema = {
    data: Object,
    isError: Boolean,
    statusText: String,
    errorType: {
      wrongAccessRights: Boolean
    }
  };

  newRoom.save(function(err, doc) {
    if (err) {
      console.log('/new | POST | Error was occurred');
      responseSchema.data = undefined;
      responseSchema.isError = true;
      responseSchema.statusText = err.errmsg || 'internal server error';
      responseSchema.errorType = undefined;
    } else if (doc) {

      VillaSchema.update({
        _id: newRoom.villa
      }, {
        $push: {
          rooms: newRoom._id
        }
      }, (err, doc) => {
        if (err) {
          console.log('Pushing room in VillaSchema.rooms Error was occurred');
          console.log(err.errmsg);
        } else
          console.log("Room " + newRoom._id + " was added to VillaSchema.rooms!");
      });

      responseSchema.data = {
        _id: doc._id
      };
      responseSchema.isError = false;
      responseSchema.statusText = 'New room was successfully created';
      responseSchema.errorType = undefined;
    }
    res.status(200).send(responseSchema);
  });

  // console.log(newRoom.villa.rooms);
});

//-----------------------------------------------------
// http://localhost:3000/rooms/show
router.get('/show', (request, response) => {
  RoomSchema.find()
    .populate('villa', "name")
    .populate({
      path: 'reservations',
      select: 'checkInDate checkOutDate user',
      populate: {
        path: 'user',
        select: 'email contactNumber-_id'
      }
    }).exec((err, docs) => {
      if (err) {
        console.log('/show | GET | Error was occurred');
        response.send(err.errmsg);
      }
      if (docs)
        response.send(docs);
    });
});

//-----------------------------------------------------
// http://localhost:3000/rooms/show/:id
router.get('/show/:id', (request, response) => {
  let id = request.params.id;
  RoomSchema.findOne({
      _id: id
    }, (err, doc) => {
      if (err) {
        console.log('/show/:id | GET | Error was occurred');
        console.log(err.errmsg);
        response.send(err.errmsg);
      } else
        response.send(doc);
    })
    .populate('villa', "name")
    .populate({
      path: 'reservations',
      select: 'checkInDate checkOutDate user',
      populate: {
        path: 'user',
        select: 'email contactNumber-_id'
      }
    })
    .exec();
});

//-----------------------------------------------------
// http://localhost:3000/rooms/update/:id
router.put('/update/:id', (req, res) => {
  let id = req.params.id;
  let roomData = req.body;
  RoomSchema.update({
    _id: id
  }, roomData, (err) => {
    if (err) {
      console.log('/update/:id | PUT | Error was occurred');
      console.log(err.errmsg);
      response.send(err.errmsg);
    } else
      res.send("Room " + id + " successfully updated!");
  });
});

//-----------------------------------------------------
// http://localhost:3000/rooms/delete/:id
router.delete('/delete/:id', (request, response) => {
  let id = request.params.id;
  // let villaId="";
  let responseSchema = {
    data: Object,
    isError: Boolean,
    statusText: String,
    errorType: {
      wrongAccessRights: Boolean
    }
  };

  RoomSchema.remove({
    _id: id
  }, (err, doc) => {
    if (err) {
      console.log('/delete/:id | DELETE | Error was occurred');
      responseSchema.data = undefined;
      responseSchema.isError = true;
      responseSchema.statusText = err.errmsg || 'internal server error';
      responseSchema.errorType = undefined;
      response.status(200).send(responseSchema);
    } else if (doc) {
      responseSchema.data = {
        _id: id
      };
      // console.log(responseSchema);
      responseSchema.isError = false;
      responseSchema.statusText = 'Room was removed';
      responseSchema.errorType = undefined;
      response.status(200).send(responseSchema);

      // console.log(id);
      VillaSchema.update({}, {
        $pull: {
          rooms: id
        }
      }, {
        multi: true
      }, (err, doc) => {
        // console.log(camere);
        if (err) {
          console.log('Deleting room from VillaSchema.rooms Error was occurred');
          console.log(err.errmsg);
        } else
          console.log("Room " + id + " deleted from VillaSchema.rooms!");
      });
    }
  });
});


module.exports = router;
