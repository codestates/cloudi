'use strict';
const standImages = require('../resources/standImage')

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
    await queryInterface.bulkInsert('stands', [
      {
        id: 1,
        userId: 1,
        standQuantity: 1,
        standPrice: 37000,
        standImage: standImages[0].blob,
        standPlate: 'WOOD',
        standHolder: 'CAT',
        standText: 'WON BIN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        userId: 2,
        standQuantity: 1,
        standPrice: 39000,
        standImage: standImages[0].blob,
        standPlate: 'CERAMIC',
        standHolder: 'FISHER',
        standText: 'DONG GUN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        userId: 3,
        standQuantity: 1,
        standPrice: 36000,
        standImage: standImages[0].blob,
        standPlate: 'STEEL',
        standHolder: 'PINOCCIO',
        standText: 'JEONG JAE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        userId: 4,
        standQuantity: 1,
        standPrice: 18000,
        standImage: standImages[0].blob,
        standPlate: 'WOOD',
        standHolder: 'NONE',
        standText: 'WOO SUNG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        userId: 4,
        standQuantity: 1,
        standPrice: 37000,
        standImage: standImages[0].blob,
        standPlate: 'WOOD',
        standHolder: 'CAT',
        standText: 'WOO SUNG',
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
    await queryInterface.bulkDelete('stands', null, {});
  }
};
