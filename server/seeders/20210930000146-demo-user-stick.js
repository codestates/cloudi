'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('user_sticks', [
      {
        id: 1,
        userId: 1,
        stickId: 1,
        stickQuantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        userId: 2,
        stickId: 2,
        stickQuantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        userId: 3,
        stickId: 3,
        stickQuantity: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        userId: 4,
        stickId: 4,
        stickQuantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        userId: 4,
        stickId: 5,
        stickQuantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user_sticks', null, {});
  }
};
