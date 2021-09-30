'use strict';
const plateImages = require('../resources/plateImage')

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
    await queryInterface.bulkInsert('plates', [
      {
        id: 1,
        plateMaterial: 'CERAMIC',
        platePrice: 18000,
        plateImage: plateImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        plateMaterial: 'STEEL',
        platePrice: 17000,
        plateImage: plateImages[1].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        plateMaterial: 'WOOD',
        platePrice: 16000,
        plateImage: plateImages[2].blob,
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
    await queryInterface.bulkDelete('plates', null, {});
  }
};
