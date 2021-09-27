import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.main`
  display: ${props => 
    props.modal ? 'block' : 'none'};
  position: fixed;
  z-index: 1001;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalContent = styled.div`
  background-color: rgb(245, 245, 245);
  border: 1px solid rgb(200, 200, 200);
  margin: 22vh 20vw;
  text-align: center;
`;

const Img = styled.img`
  margin-top: 8vh;
  width: 13vw;
  height: auto;
`;

const ModalTitle = styled.h2`
  margin-top: 2vh;
  font-size: 3vw;
`;

const ModalTitleHighlight = styled.span`
  font-weight: bold;
`;

const ModalDesc = styled.h3`
  margin-top: 3vw;
  font-size: 1.5vw;
  margin-bottom: 10vh;
`;

const XButtonContainer = styled.div`
  text-align: right;
`;

const XButton = styled.img`
  margin: 10px 10px 0 0;
  width: 1.5vw;
  height: auto;
  cursor: pointer;
`;

const Construction = ({ modal, handleModal }) => {
  return (
    <ModalContainer modal={modal} onClick={handleModal}>
      <ModalContent>
        <XButtonContainer>
          <XButton src='/images/modalX.png' />
        </XButtonContainer>
        <Img src='/images/construction.png' />
        <ModalTitle>
          <ModalTitleHighlight>서비스가 준비중</ModalTitleHighlight>입니다.
          <ModalDesc>보다 나은 서비스 제공을 위하여 페이지 준비중에 있습니다.<br />빠른 시일내에 준비하여 찾아뵙겠습니다.</ModalDesc>
        </ModalTitle>
      </ModalContent>
    </ModalContainer>
  );
};

export default Construction;
