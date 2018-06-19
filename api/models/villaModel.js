'use strict';

const mongoose = require('mongoose');
const config = require('../../config/database');

//Villa Schema
const VillaSchema = mongoose.Schema({
  name: {
    type: String,
    requiered: true
  },
  rooms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room'
  }]
});

module.exports =mongoose.model('Villa', VillaSchema);
