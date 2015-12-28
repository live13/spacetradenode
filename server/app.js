// *** main dependencies *** //
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(cookieParser());

//// put passport config after this line
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Initialize Passport strategies
var initPassport = require('./passports/init');
initPassport(passport);

//static resources
app.use(express.static(path.join(__dirname, '../public')));
// *** main routes *** //
app.use('/', routes);
app.use('/api/goods', crudroutes);
app.use('/api/register', registerroute);
app.use('/api/login', loginroute);

app.use(function (req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('Client IP:', ip);
  next();
});

app.use(function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

//angular routes
app.get('*', function(req, res, next) {
  console.log('frontend call');
  var options = {root: path.join(__dirname,'../public')};
  var fileName = 'index.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log('404');
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    console.log('\ndevelopment error path');
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log('\nprod error path');
  res.render('error', {
    message: err.message,
    error: err
  });
});


module.exports = app;
