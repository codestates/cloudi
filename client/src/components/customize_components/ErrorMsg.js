import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

const StyledErrorMsg = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  h2 {
    font-weight: bold;
    font-size: 1.7rem;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  div {
    margin: 2px;
  }
  #countdown {
    color: crimson;
  }
`;

const ErrorMsg = ({ handleErrorMsg }) => {
  let [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    handleErrorMsg();
    const timer = setInterval(() => {
      setTimeLeft(timeLeft--);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []) // eslint-disable-line

  return (
    <>
      <StyledErrorMsg>
        <img src='/images/errorstands.png' alt='incensestand' width='500' height='350' />
        <h2>잘못된 경로입니다.</h2>
        <div>'CUSTOMIZE' 글자를 눌러주세요.</div>
        <div>불편을 드려 죄송합니다.</div>
        <br />
        <div id='countdown'>{timeLeft}초 후 첫 페이지로 돌아갑니다.</div>
        {
          timeLeft === 0
            ? <Redirect to='/customize/' />
            : null
        }
      </StyledErrorMsg>
    </>
  );
};

export default ErrorMsg;
