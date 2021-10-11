
import styled, { keyframes } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserinfo } from '../app/modules/userinfo';
import { removeAllSticks } from '../app/modules/stick';
import { removeAllStands } from '../app/modules/stand';
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
  const dispatch = useDispatch();
  const { userinfo } = useSelector(userinfoSelector);

  const visibleHandler = () => {
    setVisible(!visible);
  };

  const logoutHandler = () => {
    dispatch(removeUserinfo());
    dispatch(removeAllSticks());
    dispatch(removeAllStands());
  };

  return (
    <ModalContainer visible={visible} onClick={(visibleHandler)}>
      {userinfo.token === ''
        ? (
          <ModalContent top='10' onClick={() => setSignupOpen(true)}>
            Sign up
          </ModalContent>
          )
        : (
          <ModalContent top='10' onClick={() => setMyinfoOpen(true)}>
            My info
          </ModalContent>
          )}
      {userinfo.token === ''
        ? (
          <ModalContent bottom='10' onClick={() => setLoginModal(true)}>
            Log in
          </ModalContent>
          )
        : (
          <ModalContent bottom='10' onClick={logoutHandler}>
            Log out
          </ModalContent>
          )}
    </ModalContainer>
  );
};

export default Modal;
