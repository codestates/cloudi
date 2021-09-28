import styled from 'styled-components';

const Img = styled.div`
  flex: 1;
  flex-shrink: 0;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImgText = styled.div`
  flex: 1;
  flex-shrink: 0;
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 350px;
  flex-shrink: 0;
  display: flex;
`;

const IncenseSlider = ({ img, title }) => {
  return (
    <SliderContainer>
      <Img img={img} />
      <ImgText>{title}</ImgText>
    </SliderContainer>
  );
};

export default IncenseSlider;
