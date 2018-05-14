'use strict';

const express = require('express');
const router = express.Router();
const config = require('../../config/database');
const RezervareSchema = require('../models/rezervareModel');


// (1) http://localhost/rezervari/new
//
router.post('/new', function(req, res) {

  let rezervareNoua = new RezervareSchema({
    client: req.body.client,
    camera: req.body.camera,
    nrPersoane: req.body.nrPersoane,
    dataCreare: req.body.dataDePlata,
    dataCheckIn: req.body.dataCheckIn,
    dataCheckOut: req.body.dataCheckOut,
    pretTotal: req.body.pretTotal
  });

  rezervareNoua.save(function(err, doc) {


    if (err) {
      res.json({
        success: false,
        msg: 'Failed to add booking'
      });
    } else {
      res.json({
        success: true,
        msg: 'Booking is done successfully'
      });
    }
  });
});


//(2) http://localhost/rezervari/show
//
router.get('/show', (request, response) => {
  RezervareSchema.find((err, docs) => {
    if (err) {
      console.log('/show | GET | Error was occurred');
      response.send(err.errmsg);
    }
    if (docs)
      response.send(docs);
  });
});


// (3) http://localhost:3000/rezervari/show/:id
//
router.get('/show/:id', (request, response) => {
  let id = request.params.id;
  RezervareSchema.findOne({
    _id: id
  }, (err, doc) => {
    if (err) {
      console.log('/show/:id | GET | Error was occurred');
      console.log(err.errmsg);
      response.send(err.errmsg);
    } else
      response.send(doc);
  });
});


//(4) http://localhost:3000/rezervari/update/:id
//
router.put('/update/:id', (req, res) => {
  let id = req.params.id;
  let rezervareData = req.body;
  RezervareSchema.update({
    _id: id
  }, rezervareData, (err) => {
    if (err) {
      console.log('/update/:id | PUT | Error was occurred');
      console.log(err.errmsg);
      response.send(err.errmsg);
    } else
      res.send("Booking " + id + " successfully updated!");
  });
});


// (5) http://localhost:3000/rezervari/delete/:id
//
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

  RezervareSchema.remove({
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
    }
  });
});

module.exports = router;
