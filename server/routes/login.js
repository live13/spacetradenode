var express = require('express');
var router = express.Router();
var models = require('../models');
var passport = require('passport');

router.post('/',
		passport.authenticate('local'),
			function(req, res, next) {
				console.log('\nlocal passport.authenticate **********************');
				console.log(req.user);
				res.cookie('user', JSON.stringify({'id': req.user.id}), { httpOnly: false } );
				res.status(200).end();
});

router.get('/logout', function(req, res) {
	req.logout();
	res.clearCookie('user');
	res.status(200).end();
});

// route for facebook authentication and login
// different scopes while logging in
router.get('/facebook',
		passport.authenticate('facebook', { scope : 'email' }
		));

// handle the callback after facebook has authenticated the user
router.get('/facebook/callback',
		passport.authenticate('facebook', {	failureRedirect : '/api/login'}),
		function(req, res, next) {
			console.log('\nfacebook passport.authenticate **********************');
			console.log(req.user);
			res.cookie('user', JSON.stringify({'id': req.user.id}), { httpOnly: false } );
			res.status(200).end();
		}
);

module.exports = router;