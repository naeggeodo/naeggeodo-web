import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import prevbtn from '../../assets/icons/prevbtn.svg';
////// 수정
const Header = () => {
  return (
    <Wrap>
      <ContentWrap>
        <img src={prevbtn} alt='prev button' />
        <StyledImage src='/buger.png' width={44} height={44} />
        <Div>
          <Info className='title'>버거킹 백석 이마트점</Info>
          <Info className='info'>인원2명/2명</Info>
        </Div>
      </ContentWrap>
    </Wrap>
  );
};

export default Header;
const Wrap = styled.div`
  background: #191919;
  height: 10%;
  width: 100%;
`;
const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  & > img {
    cursor: pointer;
    margin-right: 13px;
  }
`;
const StyledImage = styled(Image)`
  display: inline-block;
  border-radius: 10px;
  background: #fff;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const Info = styled.p`
  color: #fff;
  line-height: 20px;
  &.title {
    font-size: 15px;
    margin-bottom: 5px;
  }
  &.info {
    font-size: 12px;
  }
`;
