import { useState } from 'react';
import styled from 'styled-components';

const ResultWrapper = styled.div`
  display: ${(props) => (props.visible === 'A' ? 'flex' : 'none')};
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
  //background-color: darkgreen;
  display: flex;
  flex-direction: column;
  height: 500px;
`;

const ContentImage = styled.div`
  flex: 80%;
  background-image: url(${(props) => props.img});
  background-size: contain;
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

const IncenseBtn = styled.div`
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
  cursor: pointer;
  :hover {
    background-color: #88965c;
  }
`;

const QuizPageResult = ({ resultVisible }) => {
  const [incense] = useState({
    id: 1,
    stickId: 2,
    stickName: '귤피',
    stickPrice: 2000,
    stickQuantity: 2,
    stickImage: '/images/product.png'
  });
  const rightClickHandler = () => {};
  return (
    <ResultWrapper visible={resultVisible && 'A'}>
      <ResultTitle>나에게 어울리는 Incense는..</ResultTitle>
      <ResultContainer>
        <ContentImage img={incense.stickImage} />
        <TextContainer>
          <TextContent color='#3f3f4a'>{incense.stickName}</TextContent>
          <TextContent>귤 냄새 가득 가득가득다그</TextContent>
          <TextContent>{incense.stickPrice} 원</TextContent>
        </TextContainer>
      </ResultContainer>
      <IncenseBtn onClick={rightClickHandler}>더 많은 제품 보러가기</IncenseBtn>
    </ResultWrapper>
  );
};

export default QuizPageResult;