'use strict';

let Task = require('mongoose').model('Task');

exports.create = (req, res) => {
  let task = new Task(req.body);

  task.save((err, task) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json({ task: task });
    }
  });
};

exports.readAll = (req, res) => {
  Task.find({}, (err, tasks) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json({ tasks: tasks });
    }
  });
};