'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sticks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stickName: {
        type: Sequelize.STRING
      },
      stickDesc: {
        type: Sequelize.STRING
      },
      stickScope: {
        type: Sequelize.JSON
      },
      stickGrade: {
        type: Sequelize.INTEGER
      },
      stickPrice: {
        type: Sequelize.INTEGER
      },
      stickImage: {
        type: Sequelize.BLOB('long')
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
    await queryInterface.dropTable('sticks');
  }
};