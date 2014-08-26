var bodyParser = require('body-parser');

module.exports = function(app, express) {

	//set static resources for client side application
	app.use(express.static(__dirname + '/../../client'));
	app.use('/bower_components', express.static(__dirname + '/../../bower_components'));
	app.use('/app', express.static(__dirname + '/../../client/app'));
	app.use('/style', express.static(__dirname + '/../../client/stlye'));
	app.use('/img', express.static(__dirname + '/../../client/img'));

	// app.use(bodyParser.json());
	var router = express.Router();

	// middleware for dealing with user logins and accounts
	// require('../users/userRoutes')(router);

	// middleware for dealing with photo uploads
	require('../photos/photoRoutes')(router);

	// can't get POST to work from in here!!!
	// router.post('./photoUpload', function(req, res) {
	// 	console.log('router post');
	// });
	// app.post('./photoUpload', function(req, res) {
	// 	console.log('POST!!');
	// });

};