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

// Initialize Passport
var initPassport = require('./passport/init');
initPassport(passport);

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
    console.log(req.baseUrl);
    console.log(req.route.path);
    console.log(req.body);
    console.log(req.params);
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
