// 'use strict';

const mongoose = require('mongoose');
const config = require('../../config/database');
const express = require('express');
const router = express.Router();
const VillaSchema = require('../models/villaModel');
//const Villa = require('../controllers/villaController'); // bring in the controller


// (1) http://localhost:3000/ville/new
//
router.post('/new', function(req, res) {

  let villaNoua = new VillaSchema({
    denumire: req.body.denumire,
    camere:req.body.camere
  });

  villaNoua.save(function(err, doc) {
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


//(2) http://localhost:3000/ville/show
//
router.get('/show', (request, response) => {
  VillaSchema.find((err, docs) => {
    if (err) {
      console.log('/show | GET | Error was occurred');
      response.send(err.errmsg);
    }
    if (docs)
      response.send(docs);
  });
});


//(3) http://localhost:3000/ville/delete/:id
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
    }
  });
});


//(4)http://localhost:3000/ville/update/:id
//
router.put('/update/:id', (req, res) => {
  let id = req.params.id;
  let rezervareData = req.body;
  VillaSchema.update({
    _id: id
  }, rezervareData, (err) => {
    if (err) {
      console.log('/update/:id | PUT | Error was occurred');
      console.log(err.errmsg);
      res.send(err.errmsg);
    } else
      res.send("Villa " + id + " successfully updated!");
  });
});


// (5) http://localhost:3000/ville/show/:id
//
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
  });
});


module.exports = router;
