import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

// const CanvasContainer = styled.section`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   background-color: none;
//   border: 2px green solid;
//   width: 50vmax;
//   @media screen and (max-width: 1023px) {

//   }
// `;

const StyledCanvas = styled.canvas`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 400px;
  justify-content: space-between;
  align-items: center;
  background-color: none;
  border: 2px yellow solid;
  @media screen and (max-width: 1023px) {

  }
`;

const Canvas = (props) => {
  const canvas = useRef();
  // const ctx = canvas.getContext('2d');
  // const image = new Image(300,300);
  // image.src = 'images/stands/steelcat.png';
  // image.onload = drawImageActualSize;

  useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    const image = new Image(); // eslint-disable-line
    image.src = '/images/wood_pinoccio.png';

    image.onload = function () {
      ctx.drawImage(image, 0, 0);
    };
    image.onerror = function () {
      console.log('error');
    };
  }, []);
  return (
    <>
      <StyledCanvas ref={canvas} width='700' height='700'>
        Your browser dosen't support canvas tag.
      </StyledCanvas>
    </>
  );
};

export default Canvas;