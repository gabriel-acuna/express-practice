const uuidv4 = require ('uuid').v4 

class TaskModel {
    constructor(name, description){
        this.id = uuidv4()
        this.name = name
        this.description = description

    }
}

module.exports = {
    TaskModel
}