const express = require('express');
const { join } = require('path');
const compression = require('compression');
const { hidePoweredBy } = require('helmet');
const cookieParser = require('cookie-parser');
const router = require('./routes/index');

module.exports = (app) => {
  app.use(cookieParser());
  app.use(compression());
  app.use(hidePoweredBy());
  app.use(express.static(join(__dirname, '..', 'public')));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(router);
};
