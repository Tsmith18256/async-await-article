'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TaskSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  priority: Number,
  dueDate: Date,
  completed: {
    type: Boolean,
    default: false
  }
});

mongoose.model('Task', TaskSchema);