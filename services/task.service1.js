const Task = require('../models').Task
const DatabaseConnection = require('../database/config').DatabaseConnection


class TaskService1 {
    async persistTask(task){
        let taskModel = new Task(task.name, task.description)
        taskModel.save()
    
    }
    async getTasks(){
       let tasks = await  Task.findAll()
       return  tasks.map((row)=>row['dataValues'])
       
    }
}

module.exports = {
    TaskService1
}