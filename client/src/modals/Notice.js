import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CloudyIcon } from '../svgs/Cloudy.svg';

const ModalContainer = styled.section`
  position: fixed;
  height: 50px;
  line-height: 50px;
  width: 300px;
  top: 95px;
  right: 0px;
  text-align: right;
  border: 2px solid;
  border-right: none;
  background-color: rgba(183, 193, 139, 0.6);
  transition: 1s;
  transform: ${props =>
    props.btn ? 'translate3d(0px, 0, 0)' : 'translate3d(300px, 0, 0)'
  };
  @media screen and (max-width: 1023px) {
    top: 64px;
  }
  div {
    font-size: 18px;
    font-weight: bold;
    margin-right: 15px;
  }
`;

const Cloudy = styled(CloudyIcon)`
  position: absolute;
  height: 50px;
  width: 50px;
`;

const Notice = ({ btn }) => {
  return (
    <ModalContainer btn={btn}>
      <Cloudy /><div>장바구니에 상품이 담겼습니다</div>
    </ModalContainer>
  );
};

export default Notice;
