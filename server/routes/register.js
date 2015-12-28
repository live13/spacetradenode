var express = require('express');
var router = express.Router();
var models = require('../models');

router.post('/', function(req, res) {
	console.log('create new user');
		console.log(req.body);
		models.Users.create({
					name: req.body.name,
					email: req.body.email,
					pass: req.body.pass
		})
		.then(function(newuser){
			console.log(newuser);
			res.json({name: newuser.name, email: newuser.email});
		})
		.catch(function(err){
			console.log('user creation error');
			res.json({err: err});
		});
});

router.get('/', function(req, res) {
	console.log('/api/register get');
	res.redirect('/api/register');
});

module.exports = router;