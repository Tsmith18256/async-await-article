'use strict';

let mongoose = require('mongoose');

module.exports = () => {
  mongoose.Promise = global.Promise;

  let db = mongoose.connect('mongodb://localhost/async-await-article');

  require('../app/task.model');

  return db;
};