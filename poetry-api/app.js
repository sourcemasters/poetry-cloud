const express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mysql = require('mysql');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const testAPIRouter = require('./routes/testAPI');
// const getRandomPoem = require('./routes/getRandomPoem');
const insertPoem = require('./routes/insertPoem');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testAPI', testAPIRouter);
// app.use('/getpoem', getRandomPoem);
app.use('/insertpoem', insertPoem);
const router = express.Router();

// router.get('/getpoem', (req, res, next) => {
//    res.send({
       
//    });
// });
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
