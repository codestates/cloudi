import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { plateImg, holderImg } from './standImages'; // eslint-disable-line

const StyledCanvas = styled.canvas`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -65%);

  width: 500px;
  height: 500px;
  justify-content: space-between;
  align-items: center;
  background-color: none;
`;

const writeText = (ctx, text, material) => {
  let fontSize = '14px';
  let yStart = 582;
  if (material === 'CERAMIC') {
    fontSize = '18px';
    yStart = 587;
  } else if (material === 'WOOD') {
    fontSize = '22px';
    yStart = 592;
  }

  ctx.font = `bold ${fontSize} Helvetica`;
  ctx.fillStyle = 'black';

  const chars = text.toUpperCase().split('');

  for (let i = 0; i < chars.length; i++) {
    ctx.fillText(chars[i], 190 + (i * 16), yStart - (i * 6));
  }
};

const Canvas = ({
  selectedOps
}) => {
  const canvas = useRef();

  useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    const { plate, holder, text } = selectedOps;

    // reset canvas
    ctx.clearRect(0, 0, 700, 700);

    // drawing plate with current state
    if (!!plate) { // eslint-disable-line
      const plateImage = new Image(); // eslint-disable-line

      plateImage.src = plateImg[plate.toLowerCase()];

      // error handling
      plateImage.onload = function () {
        ctx.drawImage(plateImage, -30, 0);

        // drawing text
        if (!!text && text !== 'empty input!') { // eslint-disable-line
          writeText(ctx, text, plate);
        }
      };
      plateImage.onerror = function () {
        console.log('plate image loading error');
      };
    } else {
      const defaultImage = new Image(); // eslint-disable-line

      defaultImage.src = '/images/defaultplate.png';

      // error handling
      defaultImage.onload = function () {
        ctx.drawImage(defaultImage, -30, 0);
        // drawing text
        if (!!text && text !== 'empty input!') { // eslint-disable-line
          writeText(ctx, text, plate);
        }
      };
      defaultImage.onerror = function () {
        console.log('default image loading error');
      };
    }

    // drawing holder with current state
    if (!!plate && !!holder && holder !== 'NONE') {
      const holderImage = new Image(); // eslint-disable-line

      holderImage.src = holderImg[plate.toLowerCase()][holder.toLowerCase()];

      // error handling
      holderImage.onload = function () {
        ctx.drawImage(holderImage, -30, 0);

        // drawing text
        if (!!text && text !== 'empty input!') { // eslint-disable-line
          writeText(ctx, text, plate);
        }
      };
      holderImage.onerror = function () {
        console.log('holder image loading error');
      };
    }
  }, [ selectedOps.plate, selectedOps.holder, selectedOps.text ]); // eslint-disable-line
  return (
    <>
      <StyledCanvas ref={canvas} width='650' height='650'>
        Sorry, your browser dosen't support canvas tags.
      </StyledCanvas>
    </>
  );
};

export default Canvas;
