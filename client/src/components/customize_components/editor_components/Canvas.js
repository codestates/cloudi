import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeCurStandImg } from '../../../app/modules/stand';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledCanvas = styled.canvas`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);

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

  const chars = text.split('');

  for (let i = 0; i < chars.length; i++) {
    ctx.fillText(chars[i], 190 + (i * 16), yStart - (i * 6));
  }
};

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-5vw'
  },
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: '5vw'
  }
};

const pageTransitions = {
  duration: 0.5
};

const Canvas = ({
  selectedOps,
  standImages
}) => {
  const canvas = useRef();

  const { plateImg, holderImg } = standImages;

  const dispatch = useDispatch();

  useEffect(() => {
    const ctx = canvas.current.getContext('2d');
    const { plate, holder, text } = selectedOps;

    // 옵션 바뀔때마다 캔버스 초기화
    ctx.clearRect(0, 0, 700, 700);

    // 우선 받침대 선택했는지 확인
    if (!!plate) { // eslint-disable-line
      // 선택했다면, 선택한 이미지 그리기
      const plateImage = new Image(); // eslint-disable-line

      plateImage.src = plateImg[plate];

      plateImage.onload = function () {
        ctx.drawImage(plateImage, -30, 0);

        // 텍스트 선택했다면 그리고 이미지 생성
        if (!!text && text !== '-- NO TEXT --' && holder === 'NONE') { // eslint-disable-line
          writeText(ctx, text, plate);
        }

        // ! 이미지 생성
        const curStandImg = canvas.current.toDataURL();
        dispatch(changeCurStandImg(curStandImg));
      };
      plateImage.onerror = function () {
        console.log('plate image loading error');
      };
    } else {
      // 아직 선택하지 않은 상태라면, 선택 전 디폴트 이미지 그리기
      const defaultImage = new Image(); // eslint-disable-line

      defaultImage.src = '/images/defaultplate.png';

      defaultImage.onload = function () {
        ctx.drawImage(defaultImage, -30, 0);
      };
      // error handling
      defaultImage.onerror = function () {
        console.log('default image loading error');
      };
    }

    // 받침대, 홀더 둘 다 선택되었는지 확인(NONE 도 선택한것임)
    if (!!plate && !!holder && holder !== 'NONE') {
      const holderImage = new Image(); // eslint-disable-line

      holderImage.src = holderImg[plate][holder];

      holderImage.onload = function () {
        ctx.drawImage(holderImage, -30, 0);

        // 텍스트 선택했다면 그리고 이미지 생성
        if (!!text && text !== '-- NO TEXT --') { // eslint-disable-line
          writeText(ctx, text, plate);
        }

        // ! 이미지 생성
        const curStandImg = canvas.current.toDataURL();
        dispatch(changeCurStandImg(curStandImg));
      };
      holderImage.onerror = function () {
        console.log('holder image loading error');
      };
    }
  }, [ selectedOps.plate, selectedOps.holder, selectedOps.text ]); // eslint-disable-line
  return (
    <motion.div
      initial='initial'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransitions}
    >
      <StyledCanvas ref={canvas} width='700' height='700'>
        Sorry, your browser dosen't support canvas tags.
      </StyledCanvas>
    </motion.div>
  );
};

export default Canvas;
