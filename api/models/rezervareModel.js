'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const relationship = require("mongoose-relationship");
const path = require('path');
const Camera = require('./cameraModel');
const User = require('./userModel');


const RezervareSchema = new Schema({
  dataDePlata: {
    type: Date,
    default: Date.now
  },
  dataCheckIn: {
    type: Date,
    default: Date.now
  },
  dataCheckOut: Date,
  statut: {
    type: Number,
    default: 1
  },
  pretTotal: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    childPath: "user"
  },
  camera: {
    type: Schema.Types.ObjectId,
    ref: 'Camera',
    childPath: "camere"
  }
});

// ReservationSchema.plugin(relationship, {
//   relationshipPathName: 'rezervare'
// });

module.exports = mongoose.model('Rezervare', RezervareSchema);
