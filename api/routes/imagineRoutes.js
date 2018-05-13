const config = require('../../config/database');
const express = require('express');
const router = express.Router();
const ImagineSchema = require('../models/imagineModel');

// (1) http://localhost:3000/imagini/upload
//
router.post('/upload', function(req, res) {

  let imagineNoua = new ImagineSchema({
    descriere: req.body.descriere,
    imgUrl: req.body.imgUrl
  });

  let responseSchema = {
    data: Object,
    isError: Boolean,
    statusText: String,
    errorType: {
      wrongAccessRights: Boolean
    }
  };

  imagineNoua.save(function(err, doc) {
    if (err) {
      console.log('/upload | POST | Error was occurred');
      responseSchema.data = undefined;
      responseSchema.isError = true;
      responseSchema.statusText = err.errmsg || 'internal server error';
      responseSchema.errorType = undefined;
    } else if (doc) {
      responseSchema.data = {
        _id: doc._id
      };
      responseSchema.isError = false;
      responseSchema.statusText = 'New image was successfully created';
      responseSchema.errorType = undefined;
    }
    res.status(200).send(responseSchema);
  });
});


// (2) http://localhost:3000/imagini/show
//
router.get('/show', (request, response) => {
  ImagineSchema.find((err, docs) => {
    if (err) {
      console.log('/show | GET | Error was occurred');
      response.send(err.errmsg);
    }
    if (docs)
      response.send(docs);
  });
});


// (3) http://localhost:3000/imagini/show/:id
//
router.get('/show/:id', (request, response) => {
  let id = request.params.id;
  ImagineSchema.findOne({
    _id: id
  }, (err, doc) => {
    if (err) {
      console.log('/show/:id | GET | Error was occurred');
      console.log(err.errmsg);
      response.send(err.errmsg);
    } else
      response.send(doc);
  });
});

// (4) http://localhost:3000/imagini/delete/:id
//
router.delete('/delete/:id', (request, response) => {
		let id = request.params.id;

		let responseSchema = {
			data: Object,
			isError: Boolean,
			statusText: String,
			errorType: {
				wrongAccessRights: Boolean
			}
		}

		ImagineSchema.remove({ _id: id }, (err, doc) => {
			if (err) {
				console.log('/delete/:id | DELETE | Error was occurred');
				responseSchema.data = undefined;
				responseSchema.isError = true;
				responseSchema.statusText = err.errmsg || 'internal server error';
				responseSchema.errorType = undefined;
				response.status(200).send(responseSchema);
			} else if (doc) {
				responseSchema.data = {_id: id};
				responseSchema.isError = false;
				responseSchema.statusText = 'Image was removed';
				responseSchema.errorType = undefined;
				response.status(200).send(responseSchema);
			}
		});
	});


module.exports = router;
