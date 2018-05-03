

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const relationship = require("mongoose-relationship");
const path = require('path');
const Camera = require('./cameraModel');


const VillaSchema = new Schema({
  denumire: {
    type: String,
    requiered: true
  },
  camere: [{
    type: Schema.Types.ObjectId,
    ref: 'Camera'
  }]
});


// Using the Villa model from outside
module.exports = mongoose.model('Villa', VillaSchema);
