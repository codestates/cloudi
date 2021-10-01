'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      standQuantity: {
        type: Sequelize.INTEGER
      },
      standPrice: {
        type: Sequelize.INTEGER
      },
      standImage: {
        type: Sequelize.BLOB('long')
      },
      standPlate: {
        type: Sequelize.STRING
      },
      standHolder: {
        type: Sequelize.STRING
      },
      standText: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stands');
  }
};