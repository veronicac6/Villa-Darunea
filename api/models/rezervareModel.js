'use strict';

const mongoose = require('mongoose');
// const Schema = mongoose.Schema();
const relationship = require("mongoose-relationship");
const path = require('path');
const Camera = require('./cameraModel');
const User = require('./userModel');


const RezervareSchema = mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    requiered: true
  },
  camera: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Camera',
    requiered: true
  },
  nrPersoane: {
    type: Number,
    requiered: true
  },
  dataCreare: {
    type: Date,
    default: Date.now,
    requiered: true
  },
  dataCheckIn: {
    type: Date,
    default: Date.now,
    requiered: true
  },
  dataCheckOut: {
    type: Date,
    requiered: true
  },
  pretTotal: {
    type: Number,
    requiered: true
  }
});


// ReservationSchema.plugin(relationship, { relationshipPathName: ['user', 'camera'] });

module.exports = mongoose.model('Rezervare', RezervareSchema);
