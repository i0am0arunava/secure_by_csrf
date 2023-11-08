'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Chapters', 'NoteId', {
      type: Sequelize.DataTypes.INTEGER
    })
    await queryInterface.addConstraint('Chapters', {
      fields: ['NoteId'],
      type: 'foreign key',
      references: {
        table: 'Notes',
        field: 'id'
      }
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Chapters','NoteId')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
