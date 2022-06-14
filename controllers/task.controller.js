const TaskModel = require('../models/task').Task
const TaskService = require('../services/task.service1').TaskService1

class TaskController {
    async home(req, res) {

        try {
            let tasks = await new TaskService().getTasks()
            res.render('tasks/index', { tasks: tasks })
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = {
    TaskController
}