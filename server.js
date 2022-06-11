const express = require('express')
const TaskService = require('./services/task.service').TaskService

const PORT = 3000

const app = express()

app.use(express.json())

app.post('/tasks', async (req, res)=>{
   try {
    let task = {
        name: req.body.name,
        description: req.body.description
    }
    console.log(task);
    let taskService = new TaskService()
    let taskPersisted = await taskService.persistTask(task)
    
    res.send({
        message: 'task registred',
        task: taskPersisted
    })
   } catch (error) {
    console.error(error)
   }
})

app.listen(PORT)
