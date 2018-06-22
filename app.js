const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRoute = require('./routes/index');
const apiRoutes = require('./routes/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoutes);

// loads index.html for any route that didn't match!
app.use('/', indexRoute);


module.exports = app;
