'use strict';

const mongoose = require('mongoose');
const relationship = require("mongoose-relationship");
const path = require('path');
const Rezervare = require('./rezervareModel');

const ClientSchema = mongoose.Schema({
  nume: {
    type: String,
    requiered: true
  },
  prenume: {
    type: String,
    requiered: true
  },
  email: {
    type: String,
    requiered: true
  },
  telefon: {
    type: Number,
    requiered: true
  },
  rezervare: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rezervare'
  }
})

module.exports = mongoose.model('Client', ClientSchema);
