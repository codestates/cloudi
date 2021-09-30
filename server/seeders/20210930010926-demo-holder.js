'use strict';
const holderImages = require('../resources/holderImage')

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
    await queryInterface.bulkInsert('holders', [
      {
        id: 1,
        holderType: 'CAT',
        holderMaterial: 'CERAMIC',
        holderPrice: 15000,
        holderImage: holderImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        holderType: 'FISHER',
        holderMaterial: 'CERAMIC',
        holderPrice: 16000,
        holderImage: holderImages[1].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        holderType: 'PINOCCIO',
        holderMaterial: 'CERAMIC',
        holderPrice: 17000,
        holderImage: holderImages[2].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        holderType: 'CAT',
        holderMaterial: 'STEEL',
        holderPrice: 15000,
        holderImage: holderImages[3].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        holderType: 'FISHER',
        holderMaterial: 'STEEL',
        holderPrice: 16000,
        holderImage: holderImages[4].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        holderType: 'PINOCCIO',
        holderMaterial: 'STEEL',
        holderPrice: 14000,
        holderImage: holderImages[5].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        holderType: 'CAT',
        holderMaterial: 'WOOD',
        holderPrice: 17000,
        holderImage: holderImages[6].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        holderType: 'FISHER',
        holderMaterial: 'WOOD',
        holderPrice: 16000,
        holderImage: holderImages[7].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        holderType: 'PINOCCIO',
        holderMaterial: 'WOOD',
        holderPrice: 15000,
        holderImage: holderImages[8].blob,
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
    await queryInterface.bulkDelete('holders', null, {});
  }
};
