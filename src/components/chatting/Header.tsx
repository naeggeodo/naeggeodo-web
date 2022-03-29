import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';
import prevbtn from '../../assets/icons/prevbtn.svg';
<<<<<<< HEAD
////// 수정
=======
type StyledProps = {
  name: 'title' | 'info';
};
>>>>>>> refactor/0329-code-review
const Header = () => {
  return (
    <Wrap>
      <ContentWrap>
        <img src={prevbtn} alt='prev button' />
        <StyledImage src='/buger.png' width={44} height={44} />
        <Div>
          <Info name='title'>버거킹 백석 이마트점</Info>
          <Info name='info'>인원2명/2명</Info>
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
<<<<<<< HEAD
  & > img {
    cursor: pointer;
    margin-right: 13px;
  }
=======
  gap: 10px;
>>>>>>> refactor/0329-code-review
`;
const StyledImage = styled(Image)`
  display: inline-block;
  border-radius: 10px;
  background: #fff;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Info = styled.p<StyledProps>`
  color: #fff;
  line-height: 20px;
  ${(props) =>
    props.name === 'title' &&
    css`
      font-size: 15px;
    `}
  ${(props) =>
    props.name === 'info' &&
    css`
      font-size: 12px;
    `}
`;
