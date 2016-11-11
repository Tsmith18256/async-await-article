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

exports.read = (req, res) => {
  Task.findById(req.params.taskId, (err, task) => {
    if (err) {
      res.status(500).json({ error: err });
    } else if (!task) {
      res.status(400).json({ error: 'No task with the given ID' });
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