'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addConstraint('user_stands', {
      fields : ['userId'],
      type: 'foreign key',
      name: 'FK_ustand_userId',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('user_stands', {
     fields : ['standId'],
     type: 'foreign key',
     name: 'FK_ustand_standId',
     references: {
       table: 'stands',
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
     await queryInterface.removeConstraint('user_stands', 'FK_ustand_userId');
     await queryInterface.removeConstraint('user_stands', 'FK_ustand_standId');
  }
};
