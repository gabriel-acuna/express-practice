
const TaskModel = require('../models/task').Task
const TaskService1 = require('../services/task.service1').TaskService1

class TaskController {
    async home(req, res) {

        try {
            let tasks = await new TaskService1().getTasks()
            res.render('tasks/index', { tasks: tasks })
        } catch (error) {
            console.error(error)
        }
    }

    async save(req, res) {
        let response = await new TaskService1().persistTask(req.body)
        if (!response) {
            res.status(422)
            res.send({ message: 'Something go worng!' })
        }
        res.status(201)
        res.send({ message: 'Task has been created' })

    }

    async getTasks(req, res) {
        let tasks = await new TaskService1().getTasks()
        res.send(tasks)
    }

    new(ree, res) {
        res.render('tasks/new')
    }

    async getTask(req, res) {
        let { id } = req.params
        let task = await new TaskService1().getTask(id)
        res.json(task)
    }
    async edit(req, res) {
        let task = await new TaskService1().getTask(req.params.id)
        res.render('tasks/edit', { task })
    }

    async updateTask(req, res) {
        let response = await new TaskService1().updateTask(req.params.id, req.body)
        if (!response) {
            res.status(422)
            res.send({ message: 'Something go worng!' })
        }
        res.status(200)
        res.send({ message: 'Task has been updated', data: req.body })
        
    }

    async deleteTask(req, res) {
        console.log(req.params);
        let response = await new TaskService1().deleteTask(req.params.id)
        if(!response){
            res.status(422)
            res.send({ message: 'Something go worng!' })
        }
        res.status(200)
        res.send({ message: 'Task has been deleted' })
    }
}

module.exports = {
    TaskController
}