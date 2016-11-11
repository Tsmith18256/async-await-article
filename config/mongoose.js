'use strict';

let mongoose = require('mongoose');

module.exports = () => {
  let db = mongoose.connect('mongodb://localhost/async-await-article');

  require('../app/task.model');

  return db;
};