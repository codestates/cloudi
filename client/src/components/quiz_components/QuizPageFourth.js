import { useState } from 'react';
import styled from 'styled-components';
import { WEATHER_IMAGE } from './quizItem';

const QuizContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  animation: 0.3s ease-in-out fourthEffect;
  @keyframes fourthEffect {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    50% {
      opacity: 0.5;
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

const QuizContent = styled.div`
  background-color: ${(props) => !props.image && '#666669'};
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  margin-bottom: 20px;
  width: 450px;
  height: 90px;
  transition: background-color 0.3s;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 350px;
    height: 60px;
    margin-bottom: 10px;
  }
`;

const QuizPageFourth = ({ visible, setImageClick, answer, setAnswer }) => {
  const [image, setImage] = useState({
    rainy: false,
    snow: false,
    sunny: false,
    cloudy: false
  });
  const score = {
    rainy: -1,
    snow: 1,
    sunny: 1,
    cloudy: 0
  };

  const WEATHER = ['rainy', 'snow', 'sunny', 'cloudy'];

  const imageClickHandler = (key) => {
    const imageClick = {
      rainy: false,
      snow: false,
      sunny: false,
      cloudy: false
    };
    setImage({ ...imageClick, [key]: true });
    setImageClick(true);
    setAnswer({ ...answer, fourthScore: score[key] });
  };

  return (
    <QuizContainer visible={visible}>
      {WEATHER.map((el) => {
        return (
          <QuizContent
            key={el}
            url={WEATHER_IMAGE[el]}
            onClick={() => imageClickHandler(el)}
            image={image[el]}
          />
        );
      })}
    </QuizContainer>
  );
};

export default QuizPageFourth;
