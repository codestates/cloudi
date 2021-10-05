export const QUIZ_LIST = [
  {
    width: 500,
    btn: [
      {
        id: 'joy',
        text: '즐거움',
        score: -1
      },
      {
        id: 'anger',
        text: '분노',
        score: -1
      },
      {
        id: 'surprise',
        text: '놀라움',
        width: 100,
        score: -1
      }
    ]
  },
  {
    width: 700,
    btn: [
      {
        id: 'happiness',
        text: '행복',
        width: 150,
        score: 1
      },
      {
        id: 'fear',
        text: '공포',
        width: 80,
        score: 1
      },
      {
        id: 'aversion',
        text: '혐오',
        width: 180,
        score: -1
      },
      {
        id: 'love',
        text: '사랑',
        width: 90,
        score: 1
      }
    ]
  },

  {
    width: 350,
    btn: [
      {
        id: 'loneliness',
        text: '외로움',
        width: 170,
        score: 0
      },
      {
        id: 'worry',
        text: '걱정',
        score: 1
      }
    ]
  },

  {
    width: 600,
    isMarginLeft: 90,
    btn: [
      {
        id: 'sadness',
        text: '슬픔',
        width: 150,
        score: -1
      },
      {
        id: 'ecstasy',
        text: '황홀함',
        width: 110,
        score: 1
      },
      {
        id: 'comfort',
        text: '편안함',
        width: 200,
        score: -1
      }
    ]
  }
];

export const IMAGE = {
  spring: '/images/spring_black.png',
  summer: '/images/summer_black.png',
  fall: '/images/fall_black.png',
  winter: '/images/winter_black.png'
};

export const SEQUENCE = {
  firstPage: true,
  secondPage: false,
  thirdPage: false,
  fourthPage: false
};

export const WEATHER_IMAGE = {
  rainy: '/images/rainy.jpg',
  snow: '/images/snow.png',
  sunny: '/images/sunny.png',
  cloudy: '/images/cloudy.png'
};
