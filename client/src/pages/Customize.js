import React, { useState, useEffect, useRef } from 'react';
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import axios from 'axios';

import Background from '../components/customize_components/Background';
import Circle from '../components/customize_components/Circle';
import LoadingIndicator from '../components/LoadingIndicator';
import Editor from '../components/customize_components/Editor';
import InitialMsg from '../components/customize_components/InitialMsg';

// import Footer from '../modals/Footer';

const CustomizePage = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(165deg, #ffffff, #D4DEEB);
  font-family: 'Roboto';
  
  overflow: hidden;

  a {
    text-decoration: none;
  }
`;

const Title = styled.button`
  position: fixed;
  top: 20%;
  left: 50%;
  height: 40px;
  width: 160px;
  transform: translate(-50%, -50%);
  z-index: 800;
  background: none;
  border: none;
  padding: 0;

  color: #787887;
  letter-spacing: 0;
  transition: all 0.4s;

  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-align: center;

  :focus {
    background: #E4F2D8;
    height:20px;
    border-radius: 10px;
  }

  @media screen and (max-height: 800px) {
    display: none;
  };
`;

const Customize = () => {
  const [serverData, setServerData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // ! SERVER URL
  const url = 'https://www.cloudi.shop';

  // 첫 렌더 시 모든 옵션 불러오기
  useEffect(() => {
    setIsLoading(true);
    axios({
      method: 'get',
      url: `${url}/stand`
    })
      .then(res => {
        setServerData(res.data);
      })
      .catch(e => console.log(e));

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // 포커스할 때 사용
  const titleRef = useRef();

  // 커스터마이즈 모든 단계. 나중에 버튼도 통합하기.
  const stages = [
    {
      stage: 'plate',
      message: '받침대의 재질을 선택해 주세요'
    }, {
      stage: 'holder',
      message: '인센스 스틱 홀더를 선택해 주세요'
    }, {
      stage: 'text',
      message: '받침에 새길 텍스트를 작성해 주세요'
    }, {
      stage: 'finish',
      message: '축하합니다!\n나만의 인센스 스탠드가 완성되었습니다'
    }
  ];

  // 현재 선택한 옵션, 총 가격
  const [selectedOps, setSelectedOps] = useState({
    plate: '',
    holder: '',
    text: '',
    price: 0
  });

  // 현재 선택한 옵션의 가격
  const [platePrice, setPlatePrice] = useState(0);
  const [holderPrice, setHolderPrice] = useState(0);
  const [textPrice, setTextPrice] = useState(0);

  // page transition 용
  const location = useLocation();

  // customize 눌렀을 때 초기화
  const handleReset = () => {
    setSelectedOps(
      {
        plate: '',
        holder: '',
        text: '',
        price: 0
      }
    );
    setPlatePrice(0);
    setHolderPrice(0);
    setTextPrice(0);
  };

  // 옵션 바꿀 때마다 총 가격이 바뀌어 적용됨
  useEffect(() => {
    const newPrice = platePrice + holderPrice + textPrice;
    setSelectedOps({ ...selectedOps, ...{ price: newPrice } });
  }, [platePrice, holderPrice, textPrice]); // eslint-disable-line

  // 옵션 선택시 실행되는 함수
  const handleBtnClick = (clickedBtn) => {
    if (clickedBtn.type === 'holder') {
      setSelectedOps({ ...selectedOps, ...{ holder: clickedBtn.option } });
      setPlatePrice(clickedBtn.price);
    }
    if (clickedBtn.type === 'plate') {
      setSelectedOps({ ...selectedOps, ...{ plate: clickedBtn.option } });
      setHolderPrice(clickedBtn.price);
    }
    if (clickedBtn.type === 'text') {
      setSelectedOps({ ...selectedOps, ...{ text: clickedBtn.option } });
      setTextPrice(clickedBtn.price);
    }
  };

  // 에러 메세지 나올 때 customize 글자 포커스
  const handleErrorMsg = () => {
    titleRef.current.focus();
  };

  return (
    <CustomizePage>
      <Background />
      {/* eslint-disable */
        Object.keys(serverData).length === 0 || isLoading
        ? <LoadingIndicator text={'불러오는 중...'} />
        : <>
          <Link to='/customize'>
            <Title ref={titleRef} onClick={() => handleReset()}>CUSTOMIZE</Title>
          </Link>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              {stages.map((el) => {
                return (
                  <Route
                    key={el.stage}
                    path={`/customize/${el.stage}`}
                  >
                    <Editor
                      url={url}
                      stages={stages.map(el => el.stage)}
                      stage={el.stage}
                      message={el.message}
                      handleBtnClick={handleBtnClick}
                      handleErrorMsg={handleErrorMsg}
                      selectedOps={selectedOps}
                      standImages={serverData.images}
                      buttons={serverData.options}
                    />
                  </Route>
                );
              })}
              <Route path='/customize'>
                <InitialMsg
                  selectedOps={selectedOps}
                />
              </Route>
            </Switch>
          </AnimatePresence>
          <Circle />
          {/* <Footer /> */}
        </>
      /* eslint-enable */}
    </CustomizePage>
  );
};

export default Customize;

// TODO
// consider deleting customize Header props

// ! semistandard disable commands
// eslint-disable-line
/* eslint-disable no-use-before-define */
/* eslint-enable no-use-before-define */
