const Task = require('../models').Task
const DatabaseConnection = require('../database/config').DatabaseConnection


class TaskService1 {
    async persistTask(task) {
        try {
            let taskModel = Task.build({
                id: task.id,
                name: task.name,
                description: task.description
            })
            console.log(taskModel);
            taskModel.save()
            return true

        } catch (error) {
            console.error(error)
            return false
        }
    }
    async getTasks() {
        let tasks = await Task.findAll()
        return tasks.map((row) => row['dataValues'])

    }
}

module.exports = {
    TaskService1
}