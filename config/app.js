
/**
 * 1. REQUIRE DEPENDENCIES AND INITIALIZE
 */

/** A. Config dependencies */


/** B. External dependencies */
var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');


/** C. Internal dependencies / Routes */
var routes           = require('./../server/routes/other/index');
var blogRoutes       = require('./../server/routes/blog/mainRoutes');
var hauskaufRoutes   = require('./../server/routes/hauskauf/mainRoutes');
var geldanlageRoutes = require('./../server/routes/geld_anlegen/mainRoutes');
var baufinanzierungRoutes  = require('./../server/routes/baufinanzierung/mainRoutes');
var krediteRoutes    = require('./../server/routes/kredite/mainRoutes');
var studiumRoutes    = require('./../server/routes/studium/mainRoutes');


/** D. Init */
var app = express();


/**
 * 2. CONFIGURE SETTINGS
 */

/** A. Set environment */
process.env.NODE_ENV = (process.env.NODE_ENV || 'production');


/** B. App settings */


/** view engine setup */
app.set('views', path.join(__dirname, './../server/views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'production'){
  app.use(logger('combined'));
  app.use(express.static(path.join(__dirname, './../clientProd')));
} else {
  app.use(logger('dev'));
  app.use(express.static(path.join(__dirname, './../client')));
}



/**
 * 3. LOGGING
 */



/**
 * 4. DATABASE CONNECTION
 */


/**
 * 5. APP-LEVEL LOCAL VARS
 */



/**
 * 6. OTHER MIDDLEWARE
 */



/**
 * 7. ROUTES
 */
app.use('/', routes);
app.use('/hauskauf', hauskaufRoutes);
app.use('/geldanlage', geldanlageRoutes);
app.use('/baufinanzierung', baufinanzierungRoutes);
app.use('/blog', blogRoutes);
app.use('/kredite', krediteRoutes);
app.use('/studium', studiumRoutes);


/** robots txt route */

/** sitemap route */

/** catch 404 and forward to error handler */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



/**
 * 8. ERROR HANDLING
 */


/** error handlers */

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
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
  res.render('error', {
    message: err.message,
    error: {}
  });
});


/**
 * 9. EXPORT
 */

module.exports = app;
