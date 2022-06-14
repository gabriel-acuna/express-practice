const express = require('express')
let TaskController = require('../controllers/task.controller').TaskController

let router = express.Router()

router.route('/')
    .get( new TaskController().home)
    //.post(TaskController.create)

  //  router.route('/:id', TaskController.show)

module.exports = router