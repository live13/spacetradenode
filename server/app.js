// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;

var models = require('./models');

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
    function(username, password, done) {
      console.log('\n**********Strategy*********');
      console.log(username);
      console.log(password);
      models.User.findOne({
        where: {
          name: username
        },
        attributes: ['id', 'name', 'pass']
      }).then(function(user) {
        if(user == null)
          return done(null, false);
        var foundUser = user.dataValues;
        console.log(foundUser);
        if(password != foundUser.pass)
          return done(null, false);
        return done(null, foundUser);
      }).catch(function(user) {
        console.log('\n'+username+'not found **************');
        return done(new Error('error find user in db'));
      });
/*      db.users.findByUsername(username, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        if (user.password != password) { return cb(null, false); }
        return cb(null, user);
      });*/
      //return cb(null, user);
    }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, done) {
  console.log('\nserializeUser ***************');
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log('deserializeUser');
  models.User.findOne({
    where: {
      id: id
    },
    attributes: ['name', 'pass']
  }).then(function(user) {
    console.log(user);
    if(user == null)
      return done(new Error('error user not exist'));
    return done(null, user);
  }).catch(function(user) {
    return done(new Error('error find user in db'));
  });
/*  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });*/
});

// *** routes *** //
var routes = require('./routes/index.js');
var crudroutes = require('./routes/crud.js');
var registerroute = require('./routes/register.js');
var loginroute = require('./routes/login.js');

// *** express instance *** //
var app = express();

// *** view engine *** //
//none

// *** static directory *** //

// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

//// put passport config after this line
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// *** main routes *** //
app.use('/', routes);
app.use('/api/goods', crudroutes);
app.use('/api/register', registerroute);
app.use('/api/login', loginroute);


app.all('/*', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('index.html', path.join(__dirname, '../public'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log('\ndevelopment error path');
    console.log(err.status);
    console.log(path.join(__dirname, '../public'));
    res.sendFile(path.join(__dirname, '../public','index.html'));
/*    res.render('error', {
      message: err.message,
      error: err
    });*/
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log('\nprod error path');
  console.log(path.join(__dirname, '../public'));
  res.sendFile(path.join(__dirname, '../public','index.html'));
/*  res.render('error', {
    message: err.message,
    error: {}
  });*/
});


module.exports = app;
