const express = require('express')
let TaskController = require('../controllers/task.controller').TaskController

let router = express.Router()

router.route('/tasks')
  .get(new TaskController().home)

router.route('/tasks/new')
  .get(new TaskController().new)

router.route('/tasks/:id/edit')
  .get(new TaskController().edit)

router.route('/api/tasks')
  .get(new TaskController().getTasks)
  .post(new TaskController().save)

router.route('/api/tasks/:id')
  .get(new TaskController().getTask)

router.route('/api/tasks/:id')
.put(
  new TaskController().updateTask
).delete( new TaskController().deleteTask)

module.exports = router