var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/books', require('./routes/index'));
app.use('/users',  require('./routes/users'));
app.use('/list',  require('./routes/list'));
app.use('/toAddBook',  require('./routes/toAddBook'));
app.use('/books/book',  require('./routes/addBook'));
app.use('/books/book',  require('./routes/toEditBook'));
app.use('/books/book',  require('./routes/editBook'));
app.use('/books/book',  require('./routes/delBook'));
app.use('/login',  require('./routes/login'));
app.use('/checklogin',  require('./routes/checklogin'));
app.use('/testApi/allBooks',  require('./routes/testApi/allBooks'));

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
