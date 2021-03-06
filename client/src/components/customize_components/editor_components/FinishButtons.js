import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { insertStand } from '../../../app/modules/stand';
import { standsSelector, userinfoSelector } from '../../../app/modules/hooks';

import styled from 'styled-components';
import axios from 'axios';

const ButtonWrapper = styled.div`
  margin: 0;
  padding: 0;
  outline: none;

  display: inline-flex;

  img {
    width: 25px;
    height: 25px;
  }

  .icon {
    position: relative;
    background-color: #787878;
    border-radius: 50%;
    padding: 15px;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .tooltip {
    font-family: 'Roboto';
    font-weight: 600;
    position: absolute;
    top: 0;
    font-size: 14px;
    background-color: #787878;
    color: #787878;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .tooltip::before {
    position: absolute;
    content: '';
    height: 8px;
    width: 8px;
    background-color: #787878;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon:hover span,
  .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .cart:hover,
  .cart:hover .tooltip,
  .cart:hover .tooltip::before {
    background-color: #e0bc00;
    color: #ffffff;
  }

  .cartIn:hover,
  .cartIn:hover .tooltip,
  .cartIn:hover .tooltip::before {
    background-color: #787878;
    color: #ffffff;
  }

  .redo:hover,
  .redo:hover .tooltip,
  .redo:hover .tooltip::before {
    background-color: #69955e;
    color: #ffffff;
  }

  .save:hover,
  .save:hover .tooltip,
  .save:hover .tooltip::before {
    background-color: #404aa8;
    color: #ffffff;
  }
`;

const FinishButtons = ({ selectedOps, url }) => {
  const [isAddedInCart, setIsAddedInCart] = useState(false);
  const dispatch = useDispatch();
  const stand = useSelector(standsSelector);
  const { userinfo } = useSelector(userinfoSelector);

  const handleCartBtnClick = async () => {
    // ????????? ?????????. ?????? ????????????
    setIsAddedInCart(true);

    const newStand = {
      id: 1,
      plate: selectedOps.plate,
      holder: selectedOps.holder,
      text: selectedOps.text,
      price: selectedOps.price,
      image: stand.curStandImg
    };

    // ???????????? ??????
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
        .then((res) => {
          newStand.id = res.data.id;
          dispatch(insertStand(newStand));
        })
        .catch((e) => console.log(e));
    } else {
      if (stand.stands.length !== 0) {
        newStand.id = stand.stands[stand.stands.length - 1].id + 1;
      }
      dispatch(insertStand(newStand));
    }
  };

  const handleSaveBtnClick = () => {
    const link = document.createElement('a');
    link.download = 'myIncenseStand.png';
    link.href = stand.curStandImg;
    document.body.appendChild(link);
    link.click();
  };

  useEffect(() => {
    const Matching =
      stand.stands.filter((el) => {
        return (
          el.standPlate === selectedOps.plate &&
          el.standHolder === selectedOps.holder &&
          el.standText === selectedOps.text
        );
      }).length !== 0;

    if (Matching && stand.stands.length !== 0) {
      setIsAddedInCart(true);
    }
  }, [selectedOps.plate, selectedOps.holder, selectedOps.text]); // eslint-disable-line

  return (
    <>
      <ButtonWrapper>
        {
          /* eslint-disable */
          isAddedInCart ? (
            // ????????? ?????? ?????? (????????? ????????? ???????????? ??????)
            <div className='icon cartIn'>
              <div className='tooltip'>ALREADY&nbsp;IN&nbsp;CART</div>
              <span>
                <img src='/images/addtocart.png' alt='cartIcon' />
              </span>
            </div>
          ) : (
            // ????????? ??????
            <div className='icon cart' onClick={() => handleCartBtnClick()}>
              <div className='tooltip'>ADD&nbsp;TO&nbsp;CART</div>
              <span>
                <img src='/images/addtocart.png' alt='cartIcon' />
              </span>
            </div>
          )
          /* eslint-enable */
        }
        <Link to='/customize/plate'>
          <div className='icon redo'>
            <div className='tooltip'>REDO</div>
            <span>
              <img src='/images/redo.png' alt='redoIcon' />
            </span>
          </div>
        </Link>
        <div className='icon save' onClick={() => handleSaveBtnClick()}>
          <div className='tooltip'>SAVE&nbsp;FILE</div>
          <span>
            <img src='/images/savefile.png' alt='saveIcon' />
          </span>
        </div>
      </ButtonWrapper>
    </>
  );
};

export default FinishButtons;
