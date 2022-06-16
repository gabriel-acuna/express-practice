const Task = require('../models').Task

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
    async getTask(id) {
        let task = await Task.findByPk(id)
        return task
    }
    async updateTask(id, task) {
        let updateTask = await Task.update(
            task, {
            where: {
                id: id
            }
        }
        )
    }
}

module.exports = {
    TaskService1
}