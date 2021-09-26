import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SidebarIcon } from '../svgs/sidebar.svg';

const Icon = styled(SidebarIcon)`
  z-index: 1;
  position: fixed;
  transform: scale(2);
  top: 110px;
  left: 2px;
  cursor: pointer;
  visibility: ${props =>
      props.btn ? 'hidden' : 'visible'};
  opacity: ${props =>
      props.btn ? '0' : '1'};;
  :hover{
    transform: scale(2.5);
    left: 3px;
  }
  @media screen and (max-width: 1023px) {
    top: 80px;
  }
`;

const Aside = styled.aside`
  z-index: 100;
  position: fixed;
  background-color: white;
  height: 180px;
  width: 100px;
  top: 95px;
  transition: all 1s;
  text-align: center;
  transform: ${props =>
    props.btn ? 'translate3d(0px, 0, 0)' : 'translate3d(-100px, 0, 0)'
  };
  @media screen and (max-width: 1023px) {
    top: 62px;
  }
`;

const XButtonContainer = styled.div`
  text-align: right;
  margin: 5px 5px 0 0;
`;

const XButton = styled.img`
  height: 15px;
  width: 15px;
  cursor: pointer;
`;

const PlayButtonContainer = styled.div`
  text-align: center;
  border-bottom: 1px solid;
  margin: 0 5px;
`;

const AudioButton = styled.img`
  height: 30px;
  width: 30px;
  cursor: pointer;
  margin: 15px 0;
`;

const SideBar = () => {
  const [btn, setBtn] = useState(0);
  const [playing, setPlaying] = useState(true);

  const handleBtn = () => {
    setBtn(prevState => {
      if (prevState === 0) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const handlePlaying = () => {
    setPlaying(prevState => {
      return !prevState;
    });
  };

  return (
    <>
      <Icon btn={btn} onClick={handleBtn} />
      <Aside btn={btn}>
        <XButtonContainer>
          <XButton src='/images/x.png' onClick={handleBtn} />
        </XButtonContainer>
        <PlayButtonContainer>
          {playing ? <AudioButton src='/images/audiostop.png' onClick={handlePlaying} /> : <AudioButton src='/images/audioplay.png' onClick={handlePlaying} />}
          {playing ? <audio src='/audios/bonfire.mp3' autoPlay loop> <source type='audio/mpeg' /> </audio> : null}
        </PlayButtonContainer>
      </Aside>
    </>
  );
};

export default SideBar;
