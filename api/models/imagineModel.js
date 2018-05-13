const mongoose = require('mongoose');
const config = require('../../config/database');
const multer = require('multer');


const ImagineSchema = mongoose.Schema({
  denumire: {
    type: String,
    required: true
  },
  imgUrl: {
    type: String,
    required: true
  }
});

const Imagine = (module.exports = mongoose.model('Imagine', ImagineSchema));
