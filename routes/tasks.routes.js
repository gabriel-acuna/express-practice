const express = require('express')
let TaskController = require('../controllers/task.controller')

let router = express.Router()

router.route('/tasks')
    .get(TaskController.index)
    .post(TaskController.create)

    router.route('/tasks/:id', TaskController.show)

module.exports = router