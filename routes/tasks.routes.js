const express = require('express')
let TaskController = require('../controllers/task.controller').TaskController

let router = express.Router()

router.route('/tasks')
  .get(new TaskController().home)


//  router.route('/:id', TaskController.show)

router.route('/api/tasks')
  .get(new TaskController().getTasks)
  .post(new TaskController().save)

module.exports = router