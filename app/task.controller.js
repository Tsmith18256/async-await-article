'use strict';

let Task = require('mongoose').model('Task');

exports.create = (req, res) => {
  let task = new Task(req.body);

  task.save().then(
    task => res.json({ task: task }),
    err => res.status(500).json({ error: err })
  );
};

exports.delete = (req, res) => {
  Task.findByIdAndRemove(req.params.taskId).exec().then(
    task => {
      if (!task) {
        res.status(400).json({ error: 'No task with the given ID' });
      } else {
        res.json({ task: task });
      }
    },
    err => res.status(500).json({ error: err })
  );
};

exports.read = (req, res) => {
  Task.findById(req.params.taskId).exec().then(
    task => {
      if (!task) {
        res.status(400).json({ error: 'No task with the given ID' });
      } else {
        res.json({ task: task });
      }
    },
    err => res.status(500).json({ error: err })
  );
};

exports.readAll = (req, res) => {
  Task.find({}).exec().then(
    tasks => res.json({ tasks: tasks }),
    err => res.status(500).json({ error: err })
  );
};

exports.update = (req, res) => {
  Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true }).exec().then(
    task => {
      if (!task) {
        res.status(400).json({ error: 'No task with the given ID' });
      } else {
        res.json({ task: task });
      }
    },
    err => res.status(500).json({ error: err })
  );
};