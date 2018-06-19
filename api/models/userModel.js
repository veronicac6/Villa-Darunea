'use strict';

const mongoose = require('mongoose');
const config = require('../../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    requiered: true
  },
  surname: {
    type: String,
    requiered: true
  },
  email: {
    type: String,
    requiered: true
  },
  username: {
    type: String,
    requiered: true
  },
  password: {
    type: String,
    requiered: true
  },
  contactNumber: {
    type: String,
    requiered:true
  },
  reservations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservation',
    requiered:true
  }]
});

module.exports = mongoose.model('User', UserSchema);
