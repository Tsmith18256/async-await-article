'use strict';

let router = require('express').Router();

let taskController = require('./task.controller');

/**
 * @api {get} /api/tasks/ Get all tasks
 * @apiName GetAllTasks
 */
router.get('/', taskController.readAll);

/**
 * @api {post} /api/tasks/ Create a new task
 * @apiName CreateTask
 *
 * @apiParam {String}   description         The description text of the task.
 * @apiParam {Number}   [priority]          How important this task is (higher is more important).
 * @apiParam {String}   [dueDate]           A parsable date string for the due date of this task.
 * @apiParam {Boolean}  [completed=false]   Whether or not the task has been completed.
 */
router.post('/', taskController.create);

/**
 * @api {get} /api/tasks/:taskId Get a task by ID
 * @apiName GetTask
 *
 * @apiParam {String} taskId  The ID of the task to get.
 */
// router.get('/:taskId', taskController.read);

/**
 * @api {put} /api/tasks/:taskId Update a task
 * @apiName CreateTask
 *
 * @apiParam {String}   taskId              The ID of the task to update.
 * @apiParam {String}   description         The description text of the task.
 * @apiParam {Number}   [priority]          How important this task is (higher is more important).
 * @apiParam {String}   [dueDate]           A parsable date string for the due date of this task.
 * @apiParam {Boolean}  [completed=false]   Whether or not the task has been completed.
 */
// router.put('/:taskId', taskController.update);

/**
 * @api {delete} /api/tasks/:taskId Delete a task
 * @apiName Delete Task
 *
 * @apiParam {String} taskId  The ID of the task to delete.
 */
// router.delete('/:taskId', taskController.delete);

module.exports = router;