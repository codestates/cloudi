import styled from 'styled-components';

const ClearContainer = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  align-items: center;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
  animation: 0.8s ease-in-out loginClear;
  @keyframes loginClear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-height: 768px) {
    height: 750px;
  }
`;

const ClearContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;
  width: 360px;
  height: 550px;
  @media screen and (max-width: 510px) {
    width: 350px;
  }
`;

const CloudiImg = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 180px;
`;

const ClearText = styled.div`
  font-size: ${props => props.size || 20} px;
  height: 50px;
`;

const ClearBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: 10px;
  width: 130px;
  height: 40px;
  cursor: pointer;
  transition: background 0.15s ease-in-out;
  :hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const CloseModal = styled.div`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.7);
  position: absolute;
  border-radius: 15px;
  top: 0px;
  right: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const SignupClear = ({ visible, setVisible, setLoginModal }) => {
  const loginClickHandler = () => {
    setVisible(false);
    setLoginModal(true);
  };
  return (
    <ClearContainer visible={visible}>
      <ClearContent>
        <CloseModal onClick={() => setVisible(false)}>&times;</CloseModal>
        <CloudiImg img='/images/cloudi.png' />
        <ClearText size='30'>
          환영합니다!
        </ClearText>
        <ClearText>
          회원가입이 완료되었습니다.
        </ClearText>
        <CloudiImg img='/images/ClearImg2.png' />
        <ClearBtn onClick={loginClickHandler}>로그인하기</ClearBtn>
      </ClearContent>
    </ClearContainer>
  );
};

export default SignupClear;
