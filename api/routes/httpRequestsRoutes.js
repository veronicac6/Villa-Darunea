'use strict';

const config = require('../../config/database');
const express = require('express');
const router = express.Router();
// const RoomSchema = require('../models/roomModel');
const HttpRequestsSchema = require('../models/httpRequestsModel');

router.get('/show', (request, response) => {
  HttpRequestsSchema.find((err, docs) => {
    if (err) {
      console.log('/show | GET | Error was occurred');
      response.send(err.errmsg);
    }
    if (docs)
      response.send(docs);
  });
});


router.post('/new', function(req, res) {

  let newHttpRequest = new HttpRequestsSchema({
    address: req.body.address
  });

  newHttpRequest.save(function(err, doc) {
    if (err) {
      console.log('/new | POST | Error was occurred');
      res.send(err);
    } else if (doc) {
      res.json({
        success: true,
        msg: 'HttpRequest was added successfully'
      });
    }
  });
});

router.put('/increment/:id', (req, res) => {
  let id = req.params.id;
  // let reservationData = req.body;
  HttpRequestsSchema.update({
    _id: id
  }, {
    $inc: {
      'requests': 1
    }
  }, (err) => {
    if (err) {
      console.log('/update/:id | PUT | Error was occurred');
      console.log(err.errmsg);
      res.send(err.errmsg);
    } else
      res.json({
        msg: "HttpAdress " + id + " was successfully incremented!"
      });
  });
});

module.exports = router;
