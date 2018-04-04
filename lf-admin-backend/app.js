const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')

// DB connection model
require('./api/models/db');

const index = require('./routes/index');
const about = require('./routes/about');
const blog = require('./routes/blog');
const works = require('./routes/works');

const Api = require('./api/routes/index');

const isAdmin = (req, res, next) => {
  console.log('req.session', req.session);
  console.log("req.session.isAdmin", req.session.isAdmin);
  if (req.session.isAdmin) {
     return next();
  }
  res.redirect('/');
};

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'saloft',
  resave: false,
  saveUninitialized: false
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/about', about);
app.use('/blog', blog);
app.use('/works', works);

app.use('/api', Api);
app.use('/admin', isAdmin, function(req, res) {
  res.sendFile(path.resolve(__dirname, './public', 'admin.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
