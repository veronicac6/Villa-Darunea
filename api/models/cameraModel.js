'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../../config/database');
const relationship = require('mongoose-relationship');
const path = require('path');
const Reservation = require('./rezervareModel');
const Villa = require('./villaModel');


const CameraSchema = new Schema({
  nume: String,
  capacitate: {
    type: Number,
    min: 0
  },
  liber: {
    type: Number,//0- fals sau 1- adevarat
    min: 0
  },
  villa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Villa',
    childPath: 'camere'
  },
  pret: {
    type: Number,
    min: 0
  },
  descriere: {type: String},
  rezervari: [{ //tablou
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rezervare'
  }]
});

// CameraSchema.plugin(relationship, {
//   relationshipPathName: ['villa', 'rezervare']
// });

module.exports = mongoose.model('Camera', CameraSchema);
