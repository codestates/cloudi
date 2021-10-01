import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin: 0;
  padding: 0;
  outline: none;
  text-align: center;

  display: inline-flex;

  img {
    width: 30px;
    height: 30px;
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
    font-size: 15px;
    background-color: #787878;
    color: #787878;
    padding: 7px 10px;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background-color: #787878;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .price {
    font-family: 'Roboto';
    font-weight: 400;
    position: absolute;
    top: 0;
    font-size: 16px;
    color: #787878;
    padding: 5px 8px;
    border-radius: 10px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .icon:hover .tooltip {
    top: -40px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }  
  
  .icon:hover .price {
    top: -70px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon:hover span,
  .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .WOOD:hover,
  .WOOD:hover .tooltip,
  .WOOD:hover .tooltip::before {
    background-color: #AD7542;
    color: #ffffff;
  }

  .CERAMIC:hover,
  .CERAMIC:hover .tooltip,
  .CERAMIC:hover .tooltip::before {
    background-color: #AED682;
    color: #ffffff;
  }

  .STEEL:hover,
  .STEEL:hover .tooltip,
  .STEEL:hover .tooltip::before {
    background-color: #8C8C8C;
    color: #ffffff;
  }

  .CAT:hover,
  .CAT:hover .tooltip,
  .CAT:hover .tooltip::before {
    background-color: #FFC700;
    color: #ffffff;
  }

  .NONE:hover,
  .NONE:hover .tooltip,
  .NONE:hover .tooltip::before {
    background-color: #FD986D;
    color: #ffffff;
  }

  .PINOCCIO:hover,
  .PINOCCIO:hover .tooltip,
  .PINOCCIO:hover .tooltip::before {
    background-color: #27C7D1 ;
    color: #ffffff;
  }

  .FISHER:hover,
  .FISHER:hover .tooltip,
  .FISHER:hover .tooltip::before {
    background-color: #25AEFB;
    color: #ffffff;
  }
`;

const OptionButton = ({ option, type, price, onClick }) => {
  return (
    <ButtonWrapper
      onClick={() => onClick({
        type: type,
        option: option,
        price: price
      })}
    >
      <div className={`icon ${option}`}>
        <div className='tooltip'>
          {option}
        </div>
        <div className='price'>+{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}&nbsp;₩</div>
        <span>
          <img
            src={`/images/buttons/${option}.png`}
            alt={option}
          />
        </span>
      </div>
    </ButtonWrapper>
  );
};

export default OptionButton;
