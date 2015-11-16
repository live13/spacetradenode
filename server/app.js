// *** main dependencies *** //
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var LocalStrategy = require('passport-local').Strategy;
var RedisStore = require('connect-redis')(session);

var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/config.json')[env];

// *** routes *** //
var routes = require('./routes/index.js');
var crudroutes = require('./routes/crud.js');

// *** express instance *** //
var app = express();

// *** view engine *** //
//none

// *** static directory *** //
app.use(express.static(path.join(__dirname, '../public')));

// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'space secret',
  resave: true,
  saveUninitialized: true,
  store : new RedisStore({
    host : config.redis.host,
    port : config.redis.port
  }),
  cookie : {
    maxAge : 604800 // one week
  }
}));
app.use(passport.initialize());
app.use(passport.session());

// *** passport config *** //


// *** main routes *** //
app.use('/', routes);
app.use('/', crudroutes);

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
    res.json({result:500});
    //res.render('error', {
    //  message: err.message,
    //  error: err
    //});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({result:500});
  //res.render('error', {
  //  message: err.message,
  //  error: {}
  //});
});


module.exports = app;
