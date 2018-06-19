'use strict';

const config = require('../../config/database');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const VillaSchema = require('../models/villaModel');
const RoomSchema = require('../models/roomModel');

// http://localhost:3000/villas/new
router.post('/new', function(req, res) {

  let newVilla = new VillaSchema({
    name: req.body.name,
    rooms: req.body.rooms
  });

  newVilla.save(function(err, doc) {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to add villa'
      });
    } else {
      res.json({
        success: true,
        msg: 'Villa was added successful'
      });
    }
  });
});

// http://localhost:3000/villas/show
router.get('/show', (request, response) => {
  VillaSchema.find((err, docs) => {
    if (err) {
      console.log('/show | GET | Error was occurred');
      response.send(err.errmsg);
    }
    if (docs)
      response.send(docs);
  }).populate("rooms", "name");
});

// http://localhost:3000/villas/delete/:id
router.delete('/delete/:id', (request, response) => {
  let id = request.params.id;

  let responseSchema = {
    data: Object,
    isError: Boolean,
    statusText: String,
    errorType: {
      wrongAccessRights: Boolean
    }
  }
  VillaSchema.remove({
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
      responseSchema.isError = false;
      responseSchema.statusText = 'Villa was removed';
      responseSchema.errorType = undefined;
      response.status(200).send(responseSchema);

      RoomSchema.update({
          villa: id
        }, {
          $set: {
            villa: ""
          }
        },
        (err, doc) => {
          if (err) {
            console.log('Deleting room from VillaSchema.rooms Error was occurred');
            console.log(err.errmsg);
          } else {
            console.log("Room " + id + " deleted from VillaSchema.rooms!");
          }
        });

    }
  });
});

//http://localhost:3000/villas/update/:id
router.put('/update/:id', (req, res) => {
  let id = req.params.id;
  let reservationData = req.body;
  VillaSchema.update({
    _id: id
  }, reservationData, (err) => {
    if (err) {
      console.log('/update/:id | PUT | Error was occurred');
      console.log(err.errmsg);
      res.send(err.errmsg);
    } else
      res.send("Villa " + id + "was successfully updated!");
  });
});

//http://localhost:3000/villas/show/:id
router.get('/show/:id', (request, response) => {
  let id = request.params.id;
  VillaSchema.findOne({
    _id: id
  }, (err, doc) => {
    if (err) {
      console.log('/show/:id | GET | Error was occurred');
      console.log(err.errmsg);
      response.send(err.errmsg);
    } else
      response.send(doc);
  }).populate("rooms", "name");
});

module.exports = router;
