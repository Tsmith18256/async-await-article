'use strict';

let Task = require('mongoose').model('Task');

exports.create = async (req, res) => {
  let task = new Task(req.body);

  try {
    let t = await task.save();
    res.json({ task: t });
  } catch(err) {
    res.status(500).json({ error: err });
  }
};

exports.delete = async (req, res) => {
  let task = await Task.findByIdAndRemove(req.params.taskId);

  try {
    if (!task) {
      res.status(400).json({ error: 'No task with the given ID' });
    } else {
      res.json({ task: task });
    }
  } catch(err) {
    err => res.status(500).json({ error: err })
  }
};

exports.read = async (req, res) => {
  try {
    let task = await Task.findById(req.params.taskId).exec();

    if (!task) {
      res.status(400).json({ error: 'No task with the given ID' });
    } else {
      res.json({ task: task });
    }
  } catch(err) {
    res.status(500).json({ error: err });
  }
};

exports.readAll = async (req, res) => {
  try {
    let tasks = await Task.find({}).exec();
    res.json({ tasks: tasks });
  } catch(err) {
    res.status(500).json({ error: err })
  }
};

exports.update = async (req, res) => {
  try {
    let task = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });

    if (!task) {
      res.status(400).json({ error: 'No task with the given ID' });
    } else {
      res.json({ task: task });
    }
  } catch(err) {
    err => res.status(500).json({ error: err })
  }
};