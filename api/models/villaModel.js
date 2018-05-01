'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path');
const relationship = require("mongoose-relationship");
const Camera = require('./cameraModel');


var VillaSchema = new Schema({
  denumire: String,
  camere: [{
    type: Schema.Types.ObjectId,
    ref: 'Camera'
  }]
});


// VillaSchema.plugin(relationship, {
//   relationshipPathName: 'villa'
// });

// Using the Villa model from outside
const Villa = mongoose.exports = mongoose.model('Villa', VillaSchema);
