import React, { useState, useEffect } from 'react';
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
  height: 170px;
  width: 100px;
  top: 95px;
  border-right: 1px solid;
  border-bottom: 1px solid;
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

const Desc = styled.div`
`;

const PlayButtonContainer = styled.div`
  text-align: center;
  border-bottom: 1px solid;
  margin: 0 5px;
`;

const AudioButton = styled.img`
  height: 37px;
  width: 37px;
  cursor: pointer;
  margin: 5px 0 5px 0;
`;

const TimerButton = styled(AudioButton)`
  margin-top: 18px;
`;

const TimerContainer = styled.section`
  display: ${props =>
    props.timer ? 'block' : 'none'
  };
  position: fixed;
  top: 100px;
  right: 15px;
  border-radius: 20px;
  width: 120px;
  height: 30px;
  line-height: 30px;
  background-color: ${props =>
    props.min ? 'gray' : 'red'
  };
  text-align: center;
  @media screen and (max-width: 1023px) {
    top: 80px;
  }
`;

const Timer = styled.div`
  font-size: 20px;
  color: white;
  font-weight: bold;
  margin-right: 5px;
  display: inline-block;
`;

const Reset = styled.img`
  height: 18px;
  cursor: pointer;
`;

const SideBar = () => {
  const [btn, setBtn] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [timer, setTimer] = useState(0);
  const [min, setMin] = useState(parseInt(0));
  const [sec, setSec] = useState(parseInt(0));

  const handleBtn = () => {
    setBtn(prevState => {
      if (prevState === 0) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  const handleTimer = () => {
    setMin(parseInt(15));
    setSec(parseInt(0));
    setTimer(prevState => {
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

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(sec) > 0) {
        setSec(parseInt(sec) - 1);
      }
      if (parseInt(sec) === 0) {
        if (parseInt(min) === 0) {
          clearInterval(countdown);
        } else {
          setMin(parseInt(min) - 1);
          setSec(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [min, sec]);

  const handleReset = () => {
    setMin(parseInt(15));
    setSec(parseInt(0));
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
          <Desc>ASMR</Desc>
          {playing ? <audio src='/audios/bonfire.mp3' autoPlay loop> <source type='audio/mpeg' /> </audio> : null}
        </PlayButtonContainer>
        {timer ? <TimerButton src='images/timeroff.png' onClick={handleTimer} /> : <TimerButton src='images/timer.png' onClick={handleTimer} />}
        <Desc>Iscense Timer</Desc>
      </Aside>
      <TimerContainer timer={timer} min={min}>
        <Timer>
          {min} : {sec < 10 ? `0${sec}` : sec}
        </Timer>
        <Reset src='images/reset.png' onClick={handleReset} />
      </TimerContainer>
    </>
  );
};

export default SideBar;
