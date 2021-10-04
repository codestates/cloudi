import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserinfo } from '../app/modules/userinfo';
import { userinfoSelector } from '../app/modules/hooks';
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
  font-family: 'Roboto', sans-serif;
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

const Modal = ({ visible, setVisible, setLoginModal, setSignupOpen, setMyinfoOpen }) => {
  const [isLogin] = useState(false);
  const dispatch = useDispatch();
  const { userinfo } = useSelector(userinfoSelector);
  // console.log('Modal컴포넌트 유저인포token ->', userinfo.token);
  // * 리덕스통해서 token이 있으면 isLogin true 없으면 false
  // ?  if (token !== '')
  const visibleHandler = () => {
    setVisible(!visible);
  };

  const logoutHandler = () => {
    console.log('로그아웃 클릭');
    dispatch(removeUserinfo());
    console.log('로그아웃 클릭 후에 유저인포 ->', userinfo);
  };
  return (
    <ModalContainer visible={visible} onClick={(visibleHandler)}>
      {isLogin
        ? (
          <ModalContent top='10' onClick={() => setMyinfoOpen(true)}>
            My info
          </ModalContent>
          )
        : (
          <ModalContent top='10' onClick={() => setSignupOpen(true)}>
            Sign up
          </ModalContent>
          )}
      {isLogin
        ? (
          <ModalContent bottom='10' onClick={logoutHandler}>
            Log out
          </ModalContent>
          )
        : (
          <ModalContent bottom='10' onClick={() => setLoginModal(true)}>
            Log in
          </ModalContent>
          )}
    </ModalContainer>
  );
};

export default Modal;
