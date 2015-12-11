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
						if(user == null)
							return done(null, false, { message: 'Incorrect username.' });

						var foundUser = user.dataValues;
						console.log('\n facebook found user:');
						console.log(foundUser);
						return done(null, foundUser);

					}).catch(function (user) {
						return done(new Error('error find user in db'));
					});

				})
			})

	)};