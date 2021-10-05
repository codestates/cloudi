import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CloudyIcon } from '../../svgs/Cloudy.svg';

const ResultWrapper = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  animation: 0.8s ease-in-out resultEffect;
  @keyframes resultEffect {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ResultTitle = styled.div`
  position: relative;
  font-size: 1.2rem;
  bottom: 50px;
  color: #787887;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
`;

const ContentImage = styled.div`
  flex: 80%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const TextContainer = styled.div`
  padding-top: 35px;
  flex: 20%;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 30px;
`;

const TextContent = styled.div`
  color: ${(props) => props.color || '#787887'};
`;

const IncenseBtn = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 40px;
  width: 200px;
  height: 50px;
  background-color: #b7c58b;
  color: white;
  font-size: 1.1rem;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  cursor: pointer;
  :hover {
    background-color: #88965c;
  }
`;

const LoadingImg = styled(CloudyIcon)`
  position: absolute;
  height: 500px;
  width: 500px;
`;

const LoadingText = styled.div`
  font-size: 30px;
  margin-top: 120px;
  color: rgba(0, 0, 0, 0.7);
`;

const QuizPageResult = ({ resultVisible, resultData, loadingOpen }) => {
  return (
    <>
      {loadingOpen
        ? (
          <>
            <LoadingImg />
            <LoadingText>Incense 분석 중 . . .</LoadingText>
          </>
          )
        : (
          <ResultWrapper visible={resultVisible}>
            <ResultTitle>나에게 어울리는 Incense는..</ResultTitle>
            <ResultContainer>
              <ContentImage img={resultData?.stickImage} />
              <TextContainer>
                <TextContent color='#3f3f4a'>{resultData?.stickName}</TextContent>
                <TextContent>{resultData?.stickDesc}</TextContent>
                <TextContent>{resultData?.stickPrice} 원</TextContent>
              </TextContainer>
            </ResultContainer>
            <IncenseBtn to='/incense'>
              더 많은 제품 보러가기
            </IncenseBtn>
          </ResultWrapper>
          )}
    </>
  );
};

export default QuizPageResult;
