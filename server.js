var express = require('express'),
	mongoose = require('mongoose'),
	fs = require('fs'),
	sys = require('sys');


var app = express();

mongoose.connect('mongodb://localhost/starz'); // conntect to mongo db named starz

// configure server with all the middleware and routing
// app.get('/', function(req, res) {
// 	res.send('hello world');
// })
app.use(express.static(__dirname + '/client'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/app', express.static(__dirname + '/client/app'));
app.use('/style', express.static(__dirname + '/client/stlye'));
app.use('/img', express.static(__dirname + '/client/img'));



app.listen(8000);
console.log('Express server started');