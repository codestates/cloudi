import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin: 0;
  padding: 0;
  outline: none;

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
    content: "";
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

const OptionButton = ({ option, type, onClick }) => {

  /*
  프론트에서 할 일
  - 로딩 인디케이터
  - 퀴즈 알고리즘
  - 리덕스 장바구니
  - 깃헙 readme

  서비스 시연 영상 - 팀당 1
  - 코드스테이츠 유튜브
  - 기술적 부분 최대한 X
  - 서비스를 이용할 소비자에게 하는 발표
  - 멤버별 Q&A

  
  기술 발표 영상 - 개인당 1
  - 5~7분 (스토리가 중요)
  - 자기소개X 기술소개X
  - 왜, 어떻게 사용했는가?
  - 코드직접 보여주기X 수도코드, 아이콘, 사진으로 시각화해서 보여주기
  - 10/8 오전 기술발표 녹화
  - 10/8 12시까지 기술발표 피드백 요청
  
  프로젝트 소개 페이지
  - 어떤 의도로 시작
  - 어떤 문제를 해결
  - 팀 소개
  - 스택 밑에 로고도 쓰기
  - 서비스 기능 시연(토글 -> 초기 로딩 시간 줄임)
  - 팀원 소개
  - 스택은 프론트 백 (리엑트 라우터)
  - 자신있는 스택일수록 앞으로(국룰)
  - 개인 Q&A
  - 수료 후 1주일 후 퍼블릭 전환 -> 수정 불가

  */
  return (

    <ButtonWrapper
      onClick={() => onClick({
        type: type,
        option: option
      })}
    >
      <div className={`icon ${option}`}>
        <div className='tooltip'>
          {option}
        </div>
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
