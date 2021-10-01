import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Main = styled.main`
  text-align: center;
`;

const Img = styled.img`
  height: 300px;
`;

const GuideMsg = styled.h2`
  margin: 20px 0 25px 0;
  font-weight: bold;
  font-size: 30px;
`;

const LinkElm = styled(Link)`
  margin-top: 30px;
  display: block;
  text-decoration: none;
  color: rgb(52, 200, 91);
  font-size: 30px;
  :hover {
    font-weight: bold;
  }
`;

const EmtpyProduct = () => {
  return (
    <Main>
      <Img src='/images/errorstands.png' />
      <GuideMsg>장바구니에 상품이 없습니다</GuideMsg>
      <LinkElm to='/quiz'>취향 저격하는 인센스 찾기</LinkElm>
      <LinkElm to='/customize'>나만의 인센스 홀더 만들기</LinkElm>
    </Main>
  );
};

export default EmtpyProduct;
