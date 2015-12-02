var express = require('express');
var router = express.Router();
var models = require('../models');
var passport = require('passport');

router.post('/',
		passport.authenticate('local'),
		function(req, res, next) {
/*	req.session.save(function (err) {
		if (err) {
			return next(err);
		}
		res.json(
				{ user: user,
					success: true
				});
	});*/
	console.log('\npassport.authenticate **********************');
	console.log(req.user);
	res.cookie('user', JSON.stringify({'id': req.user.id}), { httpOnly: false } );
	res.status(200).end();
/*	res.json(
			{ user: { id: req.user.id, name: req.user.name },
				success: true
			});*/
});

router.get('/logout', function(req, res) {
	req.logout();
	res.clearCookie('user');
	res.status(200).end();
});

/*router.get('/', function(req, res) {
	console.log('/api/login get');
	res.redirect('/api/login');
});*/

module.exports = router;