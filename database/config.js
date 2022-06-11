const Sequelize = require('sequelize')
require('dotenv').config()

class DatabaseConnection {

    constructor(options) {
        this.database = process.env.PGDATABASE
        this.user = process.env.PGUSER
        this.password = process.env.PGPASSWORD
        this.options = options
        this.connection = undefined
    }

    connect() {
        this.connection = Sequelize(this.database, this.user, this.password, this.options)
    }

    getConnection() {
        return this.connection
    }
}

module.exports = {
    DatabaseConnection
}