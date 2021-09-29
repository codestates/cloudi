import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  height: 350px;
  flex-shrink: 0;
  display: flex;
  cursor: pointer;
`;

const CheckImg = styled.div`
  background-image: url(${(props) => props.click || '/images/blank.png'});
  background-size: contain;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  position: relative;
  left: 140px;
  bottom: 180px;
  @media screen and (max-width: 768px) {
    left: 80px;
    bottom: 180px;
  }
`;

const Img = styled.div`
  flex: 70%;
  flex-shrink: 0;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const TextContainer = styled.div`
  flex: 30%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.div`
  color: #66667a;
`;

const IncenseSlider = ({
  data,
  clickHandler,
  clickCount,
  setClickCount,
  click,
  setClick
}) => {
  //* clickHandler -> id넘겨주면 활용해서 장바구니
  //* clickCount -> 0과 1로 상품을 클릭했는지 구분
  //* setClickCount -> set
  //* setClick -> data false

  const sliderClickHandler = (id) => {
    const data = {
      one: false,
      two: false,
      three: false
    };
    if (click[id] === true) {
      setClick({ ...data, [id]: false });
      setClickCount(0);
    } else {
      setClick({ ...data, [id]: true });
      setClickCount(1);
      clickHandler(id);
    }
  };
  return (
    <SliderContainer onClick={() => sliderClickHandler(data.id)}>
      <Img img={data.url} />
      <TextContainer>
        <Text>{data.stickName}</Text>
        <Text>{data.title}</Text>
        <Text>{data.stickPrice} KRW</Text>
        <CheckImg click={click[data.id] && '/images/check2.png'} />
      </TextContainer>
    </SliderContainer>
  );
};

export default IncenseSlider;
