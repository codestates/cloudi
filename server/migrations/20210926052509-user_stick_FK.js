'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addConstraint('user_sticks', {
      fields : ['userId'],
      type: 'foreign key',
      name: 'FK_ustick_userId',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('user_sticks', {
     fields : ['stickId'],
     type: 'foreign key',
     name: 'FK_ustick_stickId',
     references: {
       table: 'sticks',
       field: 'id'
     },
     onDelete: 'cascade',
     onUpdate: 'cascade'
   });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeConstraint('user_sticks', 'FK_ustick_userId');
     await queryInterface.removeConstraint('user_sticks', 'FK_ustick_stickId');
  }
};
