import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { plate, holder } from './standImages'; // eslint-disable-line

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
`;

const Canvas = ({
  selectedOps,
  curStage
}) => {
  const canvas = useRef();

  useEffect(() => {
    const ctx = canvas.current.getContext('2d');

    // reset canvas
    ctx.clearRect(0, 0, 700, 700);

    // drawing plate with current state
    if (!!selectedOps.plate) {
      const plateImage = new Image(); // eslint-disable-line

      plateImage.src = plate[selectedOps.plate.toLowerCase()];

      // error handling
      plateImage.onload = function () {
        ctx.drawImage(plateImage, 0, 0);
      };
      plateImage.onerror = function () {
        console.log('plate image loading error');
      };

      // drawing holder with current state
      if (
        !!selectedOps.holder  &&
        selectedOps.holder !== 'NONE'
      ) {
        const holderImage = new Image(); // eslint-disable-line

        holderImage.src = holder[selectedOps.plate.toLowerCase()][selectedOps.holder.toLowerCase()];

        // error handling
        holderImage.onload = function () {
          ctx.drawImage(holderImage, 0, 0);
        };
        holderImage.onerror = function () {
        console.log('holder image loading error');
        };
      }
    } else {
      const defaultImage = new Image(); // eslint-disable-line

      defaultImage.src = '/images/defaultplate.png';

      // error handling
      defaultImage.onload = function () {
        ctx.drawImage(defaultImage, 0, 0);
      };
      defaultImage.onerror = function () {
      console.log('default image loading error');
      };
    }
  }, [
    selectedOps.plate, 
    selectedOps.holder, 
    selectedOps.text
  ]);
  return (
    <>
      <StyledCanvas ref={canvas} width='700' height='700'>
        Sorry, your browser dosen't support canvas tags.
      </StyledCanvas>
    </>
  );
};

export default Canvas;
