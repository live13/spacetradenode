'use strict';

var FacebookStrategy = require('passport-facebook').Strategy;
var models = require('../models');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config.json')[env];

module.exports = function(passport) {

	passport.use('facebook', new FacebookStrategy({
				clientID        : config.FB_APP_ID,
				clientSecret    : config.FB_APP_SEACRET,
				callbackURL     : config.FB_CALLBACK_URL
			},

			// facebook will send back the tokens and profile
			function(access_token, refresh_token, profile, done) {

				console.log('\nprofile **********');
				console.log(profile);
				// asynchronous
				process.nextTick(function () {

					// find the user in the database based on their facebook id
					models.User.findOne({
						where: {
							fb_id: profile.id
						}
						, attributes: ['name', 'pass']
					}).then(function (user) {
						console.log(user.dataValues);
						if (user == null) {
							// if there is no user found with that facebook id, create them
							models.User.create({
										name: req.body.name,
										email: req.body.email,
										pass: req.body.pass
									})
									.then(function (newuser) {
										console.log(newuser);
										res.json({name: newuser.name, email: newuser.email});
									});
						}

						return done(null, user);

					}).catch(function (user) {
						return done(new Error('error find user in db'));
					});

				})
			})

	)};