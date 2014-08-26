// will define Mongoose models properties and methods here and export it.
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/selfiesStars2'); // connect to mongo db named starz

var db = mongoose.connection;
db.on('error', function() {
	console.log('error');
});
db.once('open', function() {
	console.log('connected to mongoose');
});

var PhotoSchema = mongoose.Schema( {
	fileName: String,
	starName: String,
	uploadedOn: Date
});
// Need to change this so use modules instead 
module.exports = Photo = mongoose.model('Photo', PhotoSchema);


