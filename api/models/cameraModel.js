'use strict';

const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const config = require('../../config/database');
const relationship = require('mongoose-relationship');
const path = require('path');
const Rezervare = require('./rezervareModel');
const Villa = require('./villaModel');


const CameraSchema = mongoose.Schema({
  denumire: {
    type: String,
    requiered: true
  },
  capacitate: {
    type: Number,
    min: 0,
    requiered: true
  },
  // liber: {
  //   type: Number, //0- fals sau 1- adevarat
  //   dafault: 1
  // },
  villa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Villa',
    requiered: true
  },
  pret: {
    type: Number,
    min: 0,
    requiered: true
  },
  rezervari: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rezervare'
  }]
});

// CameraSchema.plugin(relationship, {
//   relationshipPathName: 'villa'
// });

module.exports = mongoose.model('Camera', CameraSchema);
