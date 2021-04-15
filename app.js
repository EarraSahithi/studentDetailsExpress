//modules imported
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const studentsRouter=require('./routes/students');

//Instance of express js
const app = express();

//npm module related code
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//route definitions
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students',studentsRouter);

module.exports = app;
