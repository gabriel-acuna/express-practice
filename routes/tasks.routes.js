const express = require('express')
let TaskController = require('../controllers/task.controller').TaskController

let router = express.Router()

router.route('/tasks')
  .get(TaskController.home)

router.route('/tasks/new')
  .get(TaskController.new)

router.route('/tasks/:id/edit')
  .get(TaskController.edit)

router.route('/api/tasks')
  .get(TaskController.getTasks)
  .post(TaskController.save)

router.route('/api/tasks/:id')
  .get(TaskController.getTask)

router.route('/api/tasks/:id')
.put(
  TaskController.updateTask
).delete( TaskController.deleteTask)

module.exports = router