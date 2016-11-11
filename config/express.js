'use strict';

let bodyParser = require('body-parser');
let express = require('express');
let morgan = require('morgan');

let taskRoutes = require('../app/task.routes');

const BASE_PATH = '/api';

module.exports = () => {
  let app = express();

  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(`${BASE_PATH}/tasks`, taskRoutes);

  return app;
};