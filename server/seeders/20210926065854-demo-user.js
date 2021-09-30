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
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        isAdmin: false,
        userEmail: 'won-bin@gmail.com',
        userPassword: '1234',
        userName: '원빈',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        isAdmin: false,
        userEmail: 'dong-gun@gmail.com',
        userPassword: '1234',
        userName: '장동건',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        isAdmin: false,
        userEmail: 'jeong-jae@gmail.com',
        userPassword: '1234',
        userName: '이정재',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        isAdmin: false,
        userEmail: 'woo-sung@gmail.com',
        userPassword: '1234',
        userName: '정우성',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
