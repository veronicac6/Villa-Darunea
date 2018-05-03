'use strict';

const mongoose = require('mongoose');
// const Schema = mongoose.Schema();
const relationship = require("mongoose-relationship");
const path = require('path');
const Camera = require('./cameraModel');
const User = require('./userModel');


const RezervareSchema = mongoose.Schema({
  dataDePlata: {
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
  // statut: {
  //   type: Number,
  //   default: 1
  // },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  camera: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Camera',
    requiered: true
  },
  pretTotal: {
    type: Number,
  }
});


// ReservationSchema.plugin(relationship, { relationshipPathName: ['user', 'camera'] });

module.exports = mongoose.model('Rezervare', RezervareSchema);
