'use strict';
const stickImages = require('../resources/stickImage')

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
    await queryInterface.bulkInsert('sticks', [
      {
        id: 1,
        stickName: 'Sage',
        stickDesc: '평온한 자연의 향',
        stickScope: JSON.stringify(
          {
            citrus: 2, 
            green: 10, 
            fruity: 4, 
            fresh: 7, 
            floral: 5
          }
        ),
        stickGrade: 0,
        stickPrice: 2000,
        stickImage: stickImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        stickName: 'Tobacco',
        stickDesc: '스모키한 오리엔탈 우디 향',
        stickScope: JSON.stringify(
          {
            citrus: 1, 
            green: 7, 
            fruity: 3, 
            fresh: 3, 
            floral: 4
          }
        ),
        stickGrade: 1,
        stickPrice: 2000,
        stickImage: stickImages[1].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        stickName: 'Oakmoss',
        stickDesc: '참나무의 편안한 향',
        stickScope: JSON.stringify(
          {
            citrus: 2, 
            green: 10, 
            fruity: 3, 
            fresh: 8, 
            floral: 3
          }
        ),
        stickGrade: 2,
        stickPrice: 2000,
        stickImage: stickImages[2].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        stickName: 'Sweetvanilla',
        stickDesc: '무겁고 부드러운 향',
        stickScope: JSON.stringify(
          {
            citrus: 4, 
            green: 7, 
            fruity: 3, 
            fresh: 3, 
            floral: 5
          }
        ),
        stickGrade: 3,
        stickPrice: 2000,
        stickImage: stickImages[3].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        stickName: 'Tropicalmojito',
        stickDesc: '쿠바에 온듯 휴향지의 향',
        stickScope: JSON.stringify(
          {
            citrus: 10, 
            green: 2, 
            fruity: 6, 
            fresh: 10, 
            floral: 3
          }
        ),
        stickGrade: 4,
        stickPrice: 2000,
        stickImage: stickImages[4].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        stickName: 'Darkcinnamon',
        stickDesc: '은은하게 퍼지는 묵직한 향',
        stickScope: JSON.stringify(
          {
            citrus: 2, 
            green: 10, 
            fruity: 3, 
            fresh: 3, 
            floral: 1
          }
        ),
        stickGrade: 5,
        stickPrice: 2000,
        stickImage: stickImages[5].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        stickName: 'Sandalwood',
        stickDesc: '묵직한 나무 향',
        stickScope: JSON.stringify(
          {
            citrus: 3, 
            green: 8, 
            fruity: 1, 
            fresh: 7, 
            floral: 6
          }
        ),
        stickGrade: 6,
        stickPrice: 2000,
        stickImage: stickImages[6].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        stickName: 'Hazelnut',
        stickDesc: '견과류의 달콤한 향',
        stickScope: JSON.stringify(
          {
            citrus: 8, 
            green: 4, 
            fruity: 3, 
            fresh: 9, 
            floral: 6
          }
        ),
        stickGrade: 7,
        stickPrice: 2000,
        stickImage: stickImages[7].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        stickName: 'Fig',
        stickDesc: '무화과 특유의 나뭇잎 향',
        stickScope: JSON.stringify(
          {
            citrus: 5, 
            green: 10, 
            fruity: 7, 
            fresh: 6, 
            floral: 9
          }
        ),
        stickGrade: 8,
        stickPrice: 2000,
        stickImage: stickImages[8].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        stickName: 'Aqua',
        stickDesc: '맑고 시원한 아쿠아 향',
        stickScope: JSON.stringify(
          {
            citrus: 10, 
            green: 2, 
            fruity: 4, 
            fresh: 10, 
            floral: 4
          }
        ),
        stickGrade: 9,
        stickPrice: 2000,
        stickImage: stickImages[9].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        stickName: 'Tangerinepeel',
        stickDesc: '시트러스 계열의 상큼한 향',
        stickScope: JSON.stringify(
          {
            citrus: 10, 
            green: 3, 
            fruity: 9, 
            fresh: 7, 
            floral: 4
          }
        ),
        stickGrade: 10,
        stickPrice: 2000,
        stickImage: stickImages[10].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        stickName: 'Rainforest',
        stickDesc: '숲속의 시원하고 포근한 향',
        stickScope: JSON.stringify(
          {
            citrus: 6, 
            green: 10, 
            fruity: 5, 
            fresh: 10, 
            floral: 4
          }
        ),
        stickGrade: 11,
        stickPrice: 2000,
        stickImage: stickImages[11].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        stickName: 'Naturalincense',
        stickDesc: '인센스의 전형적인 우디한 향',
        stickScope: JSON.stringify(
          {
            citrus: 2, 
            green: 7, 
            fruity: 1, 
            fresh: 9, 
            floral: 3
          }
        ),
        stickGrade: 12,
        stickPrice: 2000,
        stickImage: stickImages[12].blob,
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
    await queryInterface.bulkDelete('sticks', null, {});
  }
};
