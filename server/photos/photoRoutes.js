var photoController = require('./photoController.js');
var formidable = require('formidable');
// var util = require('util');
var fs = require('fs');
var qt = require('quickthumb');

module.exports = function(app) {
	// app.post('/photoUpload', photoController.upload);
	app.post('./photoUpload', function(req, res) {
		console.log('POST');
	});

	app.get('/photoRequest', photoController.request);
}