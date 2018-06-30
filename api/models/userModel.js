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
    requiered: true,
    lowercase: true,
    unique: [true, 'A user with this email address already exists, please use another one.']
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
    requiered: true
  },
  reservations: [{
    type:  mongoose.Schema.Types.ObjectId,
    ref: 'Reservation'
  }],
  role: {
    type: Number,
    enum: [0, 1],//0-client; 1-admin
    default: 0,
    requiered:true
  }
});

module.exports = mongoose.model('User', UserSchema);
