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
        stickName: '세이지',
        stickDesc: '정신을 맑게해주는 평온한 자연의 향',
        stickScope: JSON.stringify(
          {
            citrus:2, 
            green:10, 
            fruity:4, 
            fresh:7, 
            floral:5
          }
        ),
        stickGrade: 0,
        stickPrice: 10000,
        stickImage: stickImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        stickName: '토바코',
        stickDesc: '시가를 표현한 스모키한 오리엔탈 우디 향',
        stickScope: JSON.stringify(
          {
            citrus:1, 
            green:7, 
            fruity:3, 
            fresh:3, 
            floral:4
          }
        ),
        stickGrade: 1,
        stickPrice: 10000,
        stickImage: stickImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        stickName: '오크모스',
        stickDesc: '참나무의 편안한 향을 베이스로 신선한 풀냄새가 조화된 향',
        stickScope: JSON.stringify(
          {
            citrus:2, 
            green:10, 
            fruity:3, 
            fresh:8, 
            floral:3
          }
        ),
        stickGrade: 2,
        stickPrice: 10000,
        stickImage: stickImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        stickName: '스위트 바닐라',
        stickDesc: '약간 무거우면서도 달콤하고 부드러운 향',
        stickScope: JSON.stringify(
          {
            citrus:4, 
            green:7, 
            fruity:3, 
            fresh:3, 
            floral:5
          }
        ),
        stickGrade: 3,
        stickPrice: 10000,
        stickImage: stickImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        stickName: '트로피컬 모히토',
        stickDesc: '쿠바에 온듯한 휴향지의 향',
        stickScope: JSON.stringify(
          {
            citrus:10, 
            green:2, 
            fruity:6, 
            fresh:10, 
            floral:3
          }
        ),
        stickGrade: 4,
        stickPrice: 10000,
        stickImage: stickImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        stickName: '다크 시나몬',
        stickDesc: '은은하게 퍼지는 묵직한 향',
        stickScope: JSON.stringify(
          {
            citrus:2, 
            green:10, 
            fruity:3, 
            fresh:3, 
            floral:1
          }
        ),
        stickGrade: 5,
        stickPrice: 10000,
        stickImage: stickImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        stickName: '백단나무',
        stickDesc: '포근하면서도 묵직한 나무 향',
        stickScope: JSON.stringify(
          {
            citrus:2, 
            green:8, 
            fruity:1, 
            fresh:3, 
            floral:6
          }
        ),
        stickGrade: 6,
        stickPrice: 10000,
        stickImage: stickImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        stickName: '개암',
        stickDesc: '견과류의 달콤함과 나무의 향이 블렌드 된 향',
        stickScope: JSON.stringify(
          {
            citrus:4, 
            green:8, 
            fruity:8, 
            fresh:10, 
            floral:6
          }
        ),
        stickGrade: 7,
        stickPrice: 10000,
        stickImage: stickImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        stickName: '무화과',
        stickDesc: '무화과 나뭇잎과 열매가 블렌드 된 가을에 어울리는 향',
        stickScope: JSON.stringify(
          {
            citrus:8, 
            green:10, 
            fruity:7, 
            fresh:6, 
            floral:9
          }
        ),
        stickGrade: 8,
        stickPrice: 10000,
        stickImage: stickImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        stickName: '아쿠아',
        stickDesc: '맑고 시원한 여름에 어울리는 아쿠아 향',
        stickScope: JSON.stringify(
          {
            citrus:10, 
            green:2, 
            fruity:4, 
            fresh:10, 
            floral:4
          }
        ),
        stickGrade: 9,
        stickPrice: 10000,
        stickImage: stickImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        stickName: '귤피',
        stickDesc: '시트러스 계열 과일 껍질의 상큼한 향',
        stickScope: JSON.stringify(
          {
            citrus:9, 
            green:3, 
            fruity:9, 
            fresh:7, 
            floral:4
          }
        ),
        stickGrade: 10,
        stickPrice: 10000,
        stickImage: stickImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        stickName: '레인 포레스트',
        stickDesc: '숲속에 온듯한 느낌. 시원하고 포근한 향',
        stickScope: JSON.stringify(
          {
            citrus:6, 
            green:10, 
            fruity:5, 
            fresh:10, 
            floral:4
          }
        ),
        stickGrade: 11,
        stickPrice: 10000,
        stickImage: stickImages[0].blob,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        stickName: '네츄럴 인센스',
        stickDesc: '무난하게 즐길 수 있는 인센스의 전형적인 우디한 향',
        stickScope: JSON.stringify(
          {
            citrus:2, 
            green:7, 
            fruity:1, 
            fresh:3, 
            floral:1
          }
        ),
        stickGrade: 12,
        stickPrice: 10000,
        stickImage: stickImages[0].blob,
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
