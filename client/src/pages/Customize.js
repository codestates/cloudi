import React, { useState, useEffect, useRef } from 'react';
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

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
  background: linear-gradient(315deg, #ffffff, #E1E7EF);

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
`;

const Customize = () => {
  const titleRef = useRef();
  // 나중에 버튼도 통합하기.
  const stages = [
    {
      stage: 'material',
      message: '스탠드의 재질을 선택해 주세요.'
    }, {
      stage: 'holder',
      message: '인센스 스틱 홀더를 선택해 주세요.'
    }, {
      stage: 'text',
      message: '받침에 새길 텍스트를 작성해 주세요.'
    }, {
      stage: 'finish',
      message: '축하합니다! 나만의 인센스 스탠드가 완성되었습니다.'
    }
  ];

  const [selectedOps, setSelectedOps] = useState({
    plate: '',
    holder: '',
    text: '',
    price: 0
  });

  const [platePrice, setPlatePrice] = useState(0);

  const [holderPrice, setHolderPrice] = useState(0);

  const [textPrice, setTextPrice] = useState(0);

  const location = useLocation();

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

  useEffect(() => {
    const newPrice = platePrice + holderPrice + textPrice;
    setSelectedOps({ ...selectedOps, ...{ price: newPrice } });
  }, [platePrice, holderPrice, textPrice]); // eslint-disable-line

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

  const handleErrorMsg = () => {
    titleRef.current.focus();
  };

  return (
    <CustomizePage>
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
                  stages={stages.map(el => el.stage)}
                  stage={el.stage}
                  message={el.message}
                  handleBtnClick={handleBtnClick}
                  handleErrorMsg={handleErrorMsg}
                  selectedOps={selectedOps}
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
      {/* <Footer /> */}
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
