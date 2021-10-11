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
        userPassword: '$2b$10$6vXo3IPzUaYfG6nBDi0B3uTw62zsFagsBUKanF5QErQeTZM59Q6je',
        userName: '원빈',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        isAdmin: false,
        userEmail: 'dong-gun@gmail.com',
        userPassword: '$2b$10$KX6gr7zcLRhTaSFMUwt19e5WdZ7I2uhUEanpzIybCELmvJpDeapIK',
        userName: '장동건',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        isAdmin: false,
        userEmail: 'jeong-jae@gmail.com',
        userPassword: '$2b$10$X7gxInvhqVv.u1hoYPkpIOX8P0/v09/wAIEX0ocFt5M9Z9CKWTJoC',
        userName: '이정재',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        isAdmin: false,
        userEmail: 'woo-sung@gmail.com',
        userPassword: '$2b$10$LKFT81Sts4vssdOLdOzPrug02JqAiKdSvecEs231WiD5cylhQjvtG',
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
