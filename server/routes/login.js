var express = require('express');
var router = express.Router();
var models = require('../models');
var passport = require('passport');

router.post('/',
		passport.authenticate('local', { failureRedirect: '/#/crud' }),
		function(req, res) {
			console.log('/api/login');
			res.redirect('/');
		});

router.get('/', function(req, res) {
	console.log('/api/login get');
	res.redirect('/api/login');
});

module.exports = router;