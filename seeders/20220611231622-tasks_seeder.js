'use strict';
const uuidv4 = require('uuid').v4

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Tasks', [
      {
        id: uuidv4(),
        name: 'Task 1',
        description: 'This is the task number 1',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuidv4(),
        name: 'Task 2',
        description: 'This is the task number 2',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuidv4(),
        name: 'Task 3',
        description: 'This is the task number 3',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuidv4(),
        name: 'Task 4',
        description: 'This is the task number 4',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: uuidv4(),
        name: 'Task 5',
        description: 'This is the task number 5',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Tasks', null, {})
  }
}