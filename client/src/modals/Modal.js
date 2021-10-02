import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const modal = keyframes`
  0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const ModalContainer = styled.div`
  position: absolute;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-name: ${modal};
  top: 55px;
  right: 50px;
  width: 170px;
  height: 130px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  pointer-events: ${(props) => (props.visible ? 'initial' : 'none')};
  cursor: pointer;
`;

const ModalContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  font-weight: bold;
  :hover {
    background-color: #b7c58b;
  }
  border-top-left-radius: ${(props) => props.top}px;
  border-top-right-radius: ${(props) => props.top}px;
  border-bottom-left-radius: ${(props) => props.bottom}px;
  border-bottom-right-radius: ${(props) => props.bottom}px;
`;

const Modal = ({ visible, setVisible, setLoginModal, setSignupOpen }) => {
  const [isLogin] = useState(false);
  const visibleHandler = () => {
    setVisible(!visible);
  };
  return (
    <ModalContainer visible={visible} onClick={visibleHandler}>
      {isLogin
        ? 'My info'
        : (
          <ModalContent top='10' onClick={() => setSignupOpen(true)}>
            Sign up
          </ModalContent>
          )}
      {isLogin
        ? 'Log out'
        : (
          <ModalContent bottom='10' onClick={() => setLoginModal(true)}>
            Log in
          </ModalContent>
          )}
    </ModalContainer>
  );
};

export default Modal;
