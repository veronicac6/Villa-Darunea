'use strict';

const mongoose = require('mongoose');
const config = require('../../config/database');

//Room Schema
const RoomSchema = mongoose.Schema({
  name: {
    type: String,
    requiered: true,
    unique:[true,'The room with this name already exists.']
  },
  capacity: {
    type: Number,
    min: [1, 'Minimum capacity is 1'],
    requiered: true
  },
  villa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Villa',
    requiered: true
  },
  price: {
    type: Number,
    min: 0,
    requiered: true
  },
  reservations:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservation',
    requiered: true
  }]
});

module.exports =mongoose.model('Room', RoomSchema);
