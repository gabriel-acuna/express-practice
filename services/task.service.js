const TaskModel = require('../mod/task1').TaskModel
const dbConnection = require('../database/db-conn').pool

class TaskService {

    constructor() { }

    async persistTask(task) {
        try {
            
            let query = 'insert into tasks (id, name, description) values($1,$2,$3) returning *'
            let taskModel = new TaskModel(task.name, task.description)
            let values = [taskModel.id, taskModel.name, taskModel.description]

            const res = await dbConnection.query(query, values)
            return res.rows[0]
        } catch (error) {
            console.error(error)
        }finally{
            dbConnection.end()
        }
    }

}

module.exports = {
    TaskService
}