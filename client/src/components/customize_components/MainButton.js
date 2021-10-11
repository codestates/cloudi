import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { insertStand } from '../../app/modules/stand';
import { standsSelector, userinfoSelector } from '../../app/modules/hooks';
import axios from 'axios';

import Cart from '../../modals/Cart'

const MainButtonContainer = styled.section`
  position: fixed;
  bottom: 7vh;
  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-height: 850px) {
    bottom: 1%;
  };
`;

const Input = styled.input`
  width: 8rem;
  padding: 12px;
  color: white;
  border: none;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  background-color: ${(props) => (props.disabled ? '#787887' : '#b7c58b')};
  :hover {
    cursor: pointer;
    background-color: ${props => props.disabled ? '#787887' : '#97a371'};
  };
  :active {
    background-color: '#b7c58b';
  };

  @media screen and (max-height: 850px) {
    width: 98vw
  };
`;

const getNextUrl = function (option) {
  if (option === 'main') {
    return {
      nextUrl: '/customize/plate',
      buttonValue: 'START'
    };
  } else if (option === 'plate') {
    return {
      nextUrl: '/customize/holder',
      buttonValue: 'NEXT'
    };
  } else if (option === 'holder') {
    return {
      nextUrl: '/customize/text',
      buttonValue: 'NEXT'
    };
  } else if (option === 'text') {
    return {
      nextUrl: '/customize/finish',
      buttonValue: 'FINISH'
    };
  } else if (option === 'finish') {
    return {
      nextUrl: '/order',
      buttonValue: 'ORDER'
    };
  } else if (option === 'error') {
    return {
      nextUrl: '/customize',
      buttonValue: 'CUSTOMIZE'
    };
  }
};

const MainButton = ({
  curStage,
  selectedOps,
  url
}) => {
  const { nextUrl, buttonValue } = getNextUrl(curStage);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();
  const stand = useSelector(standsSelector);
  const { userinfo } = useSelector(userinfoSelector);
  const [cartMsgVisible, setCartMsgVisible] = useState(false)
  const [inCartItem, setInCartItem] = useState(false)

  const handleOrderBtnClick = async () => {
    const noMatching = stand.stands.filter(el => {
      return (
        el.standPlate === selectedOps.plate &&
        el.standHolder === selectedOps.holder &&
        el.standText === selectedOps.text
      );
    }).length === 0;

    // 장바구니 안에 없음
    if (noMatching || stand.stands.length === 0) {
      setInCartItem(false);
      
      const newStand = {
        id: 1,
        plate: selectedOps.plate,
        holder: selectedOps.holder,
        text: selectedOps.text,
        price: selectedOps.price,
        image: stand.curStandImg
      };

      // 로그인한 상태
      if (userinfo.token) {
        await axios({
          method: 'post',
          url: `${url}/stand`,
          data: {
            userId: userinfo.id,
            standPrice: selectedOps.price,
            standImage: stand.curStandImg,
            standPlate: selectedOps.plate,
            standHolder: selectedOps.holder,
            standText: selectedOps.text
          }
        })
          .then(res => {
            newStand.id = res.data.id;
            dispatch(insertStand(newStand));
          })
          .catch(e => console.log(e));
      } else {
        if (stand.stands.length !== 0) {
          newStand.id = stand.stands[stand.stands.length - 1].id + 1;
        }
        dispatch(insertStand(newStand));
      }
    } else {
      // 장바구니에 이미 있음
      setInCartItem(true);
    }

    setCartMsgVisible(true);
  };

  useEffect(() => {
    if (curStage === 'plate') {
      setIsDisabled(!selectedOps.plate);
    }

    if (curStage === 'holder') {
      setIsDisabled(!selectedOps.holder);
    }

    if (curStage === 'text') {
      setIsDisabled(!selectedOps.text);
    }

    if (curStage === 'error') {
      setIsDisabled(false);
    }
    return () => {};
    // eslint-disable-next-line
  }, [ selectedOps.plate, selectedOps.holder, selectedOps.text ]);

  return (
    <>
      <MainButtonContainer>
        {/* eslint-disable */
          curStage !== 'finish'
            ? <Link to={nextUrl}>
              <Input type='button' value={buttonValue} disabled={isDisabled} />
            </Link>
            : <Input type='button' value={buttonValue} disabled={isDisabled} onClick={() => handleOrderBtnClick()} />
        /* eslint-enable */}
      </MainButtonContainer>
      <Cart
        visible={cartMsgVisible}
        setVisible={setCartMsgVisible}
        inCartItem={inCartItem}
      />
    </>
  );
};

export default MainButton;
