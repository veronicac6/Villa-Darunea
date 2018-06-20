'use strict';

const mongoose = require('mongoose');
const config = require('../../config/database');

//Reservation Schema
const ReservationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    requiered: true
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    requiered: true
  },
  nrPeople: {
    type: Number,
    requiered: true,
    min:[1, 'The minimum number of people is 1']
  },
  createDate: {
    type: Date,
    default: Date.now,
    requiered: true
  },
  checkInDate: {
    type: Date,
    default: Date.now,
    requiered: true
  },
  checkOutDate: {
    type: Date,
    requiered: true
  },
  totalPrice: {
    type: Number,
    default:0,
    requiered: true
  }
});

// Using the  models from outside
module.exports = mongoose.model('Reservation', ReservationSchema);
