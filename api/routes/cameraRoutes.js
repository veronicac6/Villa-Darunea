'use strict';

const config = require('../../config/database');
const express = require('express');
const router = express.Router();
const CameraSchema = require('../models/cameraModel');
const VillaSchema = require('../models/villaModel');


// (1) http://localhost:3000/camere/new
//
router.post('/new', function(req, res) {

  let cameraNoua = new CameraSchema({
    denumire: req.body.denumire,
    capacitate: req.body.capacitate,
    villa: req.body.villa,
    pret: req.body.pret,
  });

  let responseSchema = {
    data: Object,
    isError: Boolean,
    statusText: String,
    errorType: {
      wrongAccessRights: Boolean
    }
  };

  cameraNoua.save(function(err, doc) {
    if (err) {
      console.log('/new | POST | Error was occurred');
      responseSchema.data = undefined;
      responseSchema.isError = true;
      responseSchema.statusText = err.errmsg || 'internal server error';
      responseSchema.errorType = undefined;
    } else if (doc) {

      VillaSchema.update({
        _id: cameraNoua.villa
      }, {
        $push: {
          camere: cameraNoua._id
        }
      }, (err, doc) => {
        if (err) {
          console.log('Saving camera in VillaSchema Error was occurred');
          console.log(err.errmsg);
        } else
          console.log("Camera " + cameraNoua._id + " added to VillaSchema!");
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
});


// (2) http://localhost:3000/camere/show
//
router.get('/show', (request, response) => {
  CameraSchema.find((err, docs) => {
    if (err) {
      console.log('/show | GET | Error was occurred');
      response.send(err.errmsg);
    }
    if (docs)
      response.send(docs);
  });
});


// (3) http://localhost:3000/camere/show/:id
//
router.get('/show/:id', (request, response) => {
  let id = request.params.id;
  CameraSchema.findOne({
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


// (4) http://localhost:3000/camere/update/:id
//
router.put('/update/:id', (req, res) => {
  let id = req.params.id;
  let cameraData = req.body;
  CameraSchema.update({
    _id: id
  }, cameraData, (err) => {
    if (err) {
      console.log('/update/:id | PUT | Error was occurred');
      console.log(err.errmsg);
      response.send(err.errmsg);
    } else
      res.send("Camera " + id + " successfully updated!");
  });
});


// (5) http://localhost:3000/camere/delete/:id
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

  CameraSchema.remove({
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

      VillaSchema.update({
        $pull: {
          camere: id
        }
      }, (err, doc) => {
        // console.log(camere);
        if (err) {
          console.log('Deleting camera in VillaSchema Error was occurred');
          console.log(err.errmsg);
        } else
          console.log("Camera " + id + " deleted from VillaSchema!");
      });

      responseSchema.data = {
        _id: id
      };
      responseSchema.isError = false;
      responseSchema.statusText = 'Room was removed';
      responseSchema.errorType = undefined;
      response.status(200).send(responseSchema);
    }
  });
});


module.exports = router;
