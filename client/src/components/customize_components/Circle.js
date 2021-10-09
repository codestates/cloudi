import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const StyledCircle = styled.svg`
  position: fixed;
  z-index: 0;

  width: 10px;
  height: 10px;
  /* border: 1px red solid; */

  .circle {
    opacity: 0.3;
    top: 40px;
    fill: #ffffff;
    stroke: #787878;
    stroke-dasharray: 5
  }

  @media screen and (max-height: 800px) {
    display: none;
  };
`;

const Circle = () => {
  const container = useRef();
  const circle = gsap.utils.selector(container);
  const tl = useRef();

  useEffect(() => {
    const curStage = window.location.href.split('/')[4];

    if (curStage === 'plate') {
      gsap.to(container.current, {
        opacity: 1,
        duration: 1,
        width: 300,
        height: 300,
        x: 0,
        y: 50
      });

      gsap.to(circle('.circle'), {
        opacity: 0.2,
        stroke: '#787878',
        fill: '#ffffff',
        strokeWidth: 2
      });
    } else if (curStage === 'holder') {
      gsap.to(container.current, {
        duration: 1,
        width: 140,
        height: 140,
        x: 100,
        y: -10
      });
    } else if (curStage === 'text') {
      gsap.to(container.current, {
        duration: 1,
        width: 160,
        height: 160,
        x: -60,
        y: 120
      });
    } else if (curStage === 'finish') {
      tl.current = gsap.timeline()
        .to(container.current, {
          width: 1,
          height: 1,
          x: 0,
          y: 0
        })
        .to(circle('.circle'), {
          strokeWidth: '4',
          opacity: 1,
          stroke: '#FCA600',
          fill: 'none'
        })
        .to(container.current, {
          duration: 0.4,
          width: 1000,
          height: 1000,
          opacity: 0
        })
        .to(container.current, {
          width: 0,
          height: 0
        })
        .to(container.current, {
          opacity: 1
        });
    } else {
      gsap.to(container.current, {
        width: 0,
        height: 0
      });
    }
  }, [ window.location.href ]); // eslint-disable-line

  return (
    <StyledCircle ref={container} viewBox='0 0 100 100'>
      <circle className='circle' cx='50' cy='50' r='45' />
    </StyledCircle>
  );
};

export default Circle;
