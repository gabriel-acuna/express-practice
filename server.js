const express = require('express')
const TaskService = require('./services/task.service').TaskService

const PORT = 3000

const app = express()

let tasksRoutes = require('./routes/tasks.routes')

app.use(express.json())

app.set('view engine', 'pug')

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

app.use(tasksRoutes)
app.listen(PORT)
