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
        try {
            let updatedTask = await Task.update(
                task, {
                where: {
                    id: id
                }
            }
            )
            console.log(updatedTask);
            return true
        }
        catch (error) {
            console.error(error)
            return false
        }

    }

    async deleteTask(id) {
        try {
            let deletedTask = await Task.destroy({
                where:{
                    id:id
                }
            })
            //console.log(deletedTask);
            return true
        } catch (error) {
            console.log(error, error.trace);
            return false
        }
    }
}

module.exports = {
    TaskService1
}