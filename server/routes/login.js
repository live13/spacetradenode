var express = require('express');
var router = express.Router();
var models = require('../models');
var passport = require('passport');

router.post('/', passport.authenticate('local'), function(req, res, next) {
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
	res.status(200).end();
/*	res.json(
			{ user: res.body,
				success: true
			});*/
});

/*router.post('/', function(req, res, next) {
		passport.authenticate('local',function(err, user) {
			console.log('\nauthenticate ***********************');
			console.log(err);
			console.log(user);
			if(err)
				return res.json({ error: err.message });
			if(!user)
				return res.status(404);
			req.session.save(function (err) {
				if (err) {
					return next(err);
				}
				res.json(
						{ user: user,
							success: true
						});
			});
		})(req, res, next);
});*/

router.get('/', function(req, res) {
	console.log('/api/login get');
	res.redirect('/api/login');
});

module.exports = router;