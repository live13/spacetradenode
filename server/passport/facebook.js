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

				console.log('profile', profile);

				// asynchronous
				process.nextTick(function() {

					// find the user in the database based on their facebook id
					models.User.findOne({where: {
						fb_id: profile.id
						}
						,attributes: ['name', 'pass']
					}).then(function(user){
						console.log(user.dataValues);
						if(user == null){
							// if there is no user found with that facebook id, create them
							models.User.create({
										name: req.body.name,
										email: req.body.email,
										pass: req.body.pass
									})
									.then(function(newuser){
										console.log(newuser);
										res.json({name: newuser.name, email: newuser.email});
									});
						}

						return done(null, user);

					}).catch(function(user) {
						return done(new Error('error find user in db'));
					});

/*					, function(err, user) {

						// if there is an error, stop everything and return that
						// ie an error connecting to the database
						if (err)
							return done(err);

						// if the user is found, then log them in
						if (user) {
							return done(null, user); // user found, return that user
						} else {
							// if there is no user found with that facebook id, create them
							var newUser = new User();

							// set all of the facebook information in our user model
							newUser.fb.id    = profile.id; // set the users facebook id
							newUser.fb.access_token = access_token; // we will save the token that facebook provides to the user
							newUser.fb.firstName  = profile.name.givenName;
							newUser.fb.lastName = profile.name.familyName; // look at the passport user profile to see how names are returned
							newUser.fb.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

							// save our user to the database
							newUser.save(function(err) {
								if (err)
									throw err;

								// if successful, return the new user
								return done(null, newUser);
							});
						}

					});
				});*/

			}));

};