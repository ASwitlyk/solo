var express = require('express');
	// mongoose = require('mongoose');
	// fs = require('fs'),
	// sys = require('sys');

var formidable = require('formidable');
var util = require('util');
// var util = require('util');
var fs = require('fs');
var qt = require('quickthumb');
// var bodyParser = require('body-parser');


var app = express();

var photoModel = require('./photos/photoModel')

// app.use(bodyParser({defer: true}));

// mongoose.connect('mongodb://localhost/starz'); // conntect to mongo db named starz

// configure server with all the middleware and routing
require('./config/middleware.js')(app, express);


/*********  NEED TO MODULARIZE THIS   ****************/
app.get('/getRecent', function(req, res) {
	Photo.find(function(err, photos){
		if(err) {
			console.log('nothing found');
		} else {
			console.log(photos);
			res.send(photos);
		}
	});
	console.log('get request!!');

	// res.json({test: 'test'});
});

app.post('/photoUpload', function(req, res) {
	// console.log('req is: ', req);
	var filesFromForm = [];
	var fieldsFromForm = [];
	console.log("POST!!");
	var form = new formidable.IncomingForm();
	// var form = req.form; // its a formidable form object
	console.log('form is :', form);
	form.uploadDir = __dirname + '/upload';

	form.on('fileBegin', function(name, file) {
		file.path = form.uploadDir + "/" + file.name;
	});

	form.parse(req, function(err, fields, file) {
		filesFromForm.push(file);
		fieldsFromForm.push(fields);
	});

	form.on('end', function() {
		// create or update database document
		var photo = new photoModel({fileName: filesFromForm[0].thefile.name,
									 starName: fieldsFromForm[0].starname});
		// Save database document to mongo
		photo.save(function(err, photo) {
			if(!err) {
				console.log('saved to database');
			} else {
				console.log('err with database save is: ', err);
			}
		})
		console.log('fileFromForm is: ', filesFromForm[0].thefile.name);
		console.log('fieldsFromForm is: ', fieldsFromForm[0].starname);
	});

});


module.exports = app;