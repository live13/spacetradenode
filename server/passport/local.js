'use strict';

var LocalStrategy = require('passport-local').Strategy;
var models = require('../models');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config.json')[env];

module.exports = function(passport) {

	passport.use('local', new LocalStrategy(

			function(username, password, done) {
				console.log('\n**********Local strategy*********');
				console.log(username);
				console.log(password);
				models.User.findOne({
					where: {
						name: username
					},
					attributes: ['id', 'name', 'pass']
				}).then(function(user) {
					if(user == null)
						return done(null, false, { message: 'Incorrect username.' });

					var foundUser = user.dataValues;
					console.log(foundUser);
					if(password != foundUser.pass)
						return done(null, false, { message: 'Incorrect password.' });
					console.log('local done');
					return done(null, foundUser);
				}).catch(function(user) {
					return done(new Error('error find user in db'));
				});
			}
	)
	)};