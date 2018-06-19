'use strict';

const express = require('express');
const router = express.Router();
const config = require('../../config/database');
const ReservationSchema = require('../models/reservationModel');
const RoomSchema = require('../models/roomModel');
const UserSchema = require('../models/userModel');
// const ClientSchema = require('../models/clientModel');

//----------------------------------------------
//http://localhost/reservations/new
router.post('/new', function(req, res) {

  let newReservation = new ReservationSchema({
    user: req.body.user,
    room: req.body.room,
    nrPeople: req.body.nrPeople,
    createDate: req.body.createDate,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate,
    totalPrice: req.body.totalPrice
  });

  newReservation.save(function(err, doc) {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to add booking'
      });
    } else {

      //----pushing reservation to room.reservations
      RoomSchema.update({
        _id: newReservation.room
      }, {
        $push: {
          reservations: newReservation._id
        }
      }, (err, doc) => {
        if (err) {
          console.log('Pushing reservation in RoomSchema.reservations Error was occurred');
          console.log(err.errmsg);
        } else
          console.log("Reservation " + newReservation._id + " was pushed to Roomchema.reservations!");
      });

      //----pushing reservation to user.reservations
      UserSchema.update({
        _id: newReservation.user
      }, {
        $push: {
          reservations: newReservation._id
        }
      }, (err, doc) => {
        if (err) {
          console.log('Pushing reservation in UserSchema.reservations Error was occurred');
          console.log(err.errmsg);
        } else
          console.log("Reservation " + newReservation._id + " was pushed to UserSchema.reservations!");
      });

      res.json({
        success: true,
        msg: 'Reservation ' + newReservation._id + ' was done successfully'
      });
    }
  });
});

//----------------------------------------------
//http://localhost/reservations/show
router.get('/show', (request, response) => {
  ReservationSchema.find((err, docs) => {
    if (err) {
      console.log('/show | GET | Error was occurred');
      response.send(err.errmsg);
    }
    if (docs)
      response.send(docs);
  }).populate({
    path: 'user',
    select: 'email contactNumber'
  }).populate('room', 'name').exec();
});
//----------------------------------------------
//  http://localhost:3000/reservations/show/:id
router.get('/show/:id', (request, response) => {
  let id = request.params.id;
  ReservationSchema.findOne({
    _id: id
  }, (err, doc) => {
    if (err) {
      console.log('/show/:id | GET | Error was occurred');
      console.log(err.errmsg);
      response.send(err.errmsg);
    } else
      response.send(doc);
  }).populate({
    path: 'user',
    select: 'email contactNumber'
  }).populate('room', 'name').exec();
});
//----------------------------------------------
// http://localhost:3000/reservations/update/:id
router.put('/update/:id', (req, res) => {
  let id = req.params.id;
  let reservationData = req.body;
  ReservationSchema.update({
    _id: id
  }, reservationData, (err) => {
    if (err) {
      console.log('/update/:id | PUT | Error was occurred');
      console.log(err.errmsg);
      res.send(err.errmsg);
    } else
      res.send("Reservation " + id + "was successfully updated!");
  });
});

//----------------------------------------------
//http://localhost:3000/reservations/delete/:id
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

  ReservationSchema.remove({
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
      responseSchema.statusText = 'Booking was removed';
      responseSchema.errorType = undefined;
      response.status(200).send(responseSchema);

      RoomSchema.update({}, {
        $pull: {
          reservations: id
        }
      }, {
        multi: true
      }, (err, doc) => {
        if (err) {
          console.log('Deleting rezervare in CameraSchema Error was occurred');
          console.log(err.errmsg);
        } else
          console.log("Reservation " + id + " deleted from CameraSchema!");
      });

      UserSchema.update({}, {
        $pull: {
          reservations: id
        }
      }, {
        multi: true
      }, (err, doc) => {
        if (err) {
          console.log('Deleting rezervare in Clientchema Error was occurred');
          console.log(err.errmsg);

        } else
          console.log("Reservation " + id + " deleted from ClientSchema!");
      });
    }
  });
});

module.exports = router;
