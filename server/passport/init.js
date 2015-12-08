'use strict';

var facebook = require('./facebook');
var local = require('./local');
var models = require('../models');

module.exports = function(passport){

	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
	passport.serializeUser(function(user, done) {
		console.log('serializing user: ');
		console.log(user);
		done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
		models.User.findOne({
			where: {
				id: id
			},
			attributes: ['name', 'pass']
		}).then(function(user) {
			console.log(user.dataValues);
			if(user == null)
				return done(new Error('error user not exist'));
			console.log('deserializing user:');
			console.log(user);
			return done(null, user);
		}).catch(function(user) {
			return done(new Error('error find user in db'));
		});
	});

	// Setting up Passport Strategies for Facebook and Twitter
	facebook(passport);
	local(passport);

}