'use strict';

const mongoose = require('mongoose');
// const relationship = require("mongoose-relationship");
// const path = require('path');
const Camera = require('./cameraModel');

const VillaSchema =  mongoose.Schema({
  denumire: {
    type: String,
    requiered: true
  },
  camere: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Camera'
  }]
});


// Using the Villa model from outside
module.exports = mongoose.model('Villa', VillaSchema);
