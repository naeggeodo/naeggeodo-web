import React from 'react';
import styled from 'styled-components';
import homeblack from '../../assets/icons/homeblack.svg';
import searchgray from '../../assets/icons/searchgray.svg';
import plusgray from '../../assets/icons/plusgray.svg';
import chatgray from '../../assets/icons/chatgray.svg';
import moregray from '../../assets/icons/moregray.svg';

const TabMenu = () => {
  return (
    <Container>
      <img src={homeblack} alt="홈버튼" />
      <img src={searchgray} alt="검색" />
      <img src={plusgray} alt="추가하기" />
      <img src={chatgray} alt="채팅방" />
      <img src={moregray} alt="더보기" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0px;
  height: 83px;
  background: #ffffff;
  box-shadow: 0px -0.5px 0px #e0e0e0;
  backdrop-filter: blur(20px);
  border-radius: 20px 20px 0px 0px;
`;

export default TabMenu;
