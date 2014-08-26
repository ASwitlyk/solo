var express = require('express'),
	mongoose = require('mongoose');
	// fs = require('fs'),
	// sys = require('sys');

var formidable = require('formidable');
var util = require('util');
// var util = require('util');
var fs = require('fs');
var qt = require('quickthumb');


var app = express();

mongoose.connect('mongodb://localhost/starz'); // conntect to mongo db named starz

// configure server with all the middleware and routing
require('./config/middleware.js')(app, express);


/*********  NEED TO MODULARIZE THIS   ****************/
app.post('*', function(req, res) {
	console.log("POST!!");
	var form = new formidable.IncomingForm();

	console.log('form is: ', form);
	form.parse(req, function(err, fields, files) {

	});

	form.on('end', function(fields, files) {
		// var temp_path = this.openedFiles[0].path;
		// var file_name = this.openedFiles[0].name;
		// var new_location = 'uploads/';

		// fs.copy(temp_path, files, function(err) {
		// 	console.log('error was', err);
		// })

	});
});


module.exports = app;