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
      <h1>hello</h1>
      <TabButton>
        <img src={homeblack} alt='홈버튼' />
        <p>홈</p>
      </TabButton>
      <TabButton>
        <img src={searchgray} alt='검색' />
        <p>검색</p>
      </TabButton>
      <TabButton>
        <img src={plusgray} alt='추가하기' />
        <p>내꺼도 생성</p>
      </TabButton>
      <TabButton>
        <img src={chatgray} alt='채팅방' />
        <p>내꺼도</p>
      </TabButton>
      <TabButton>
        <img src={moregray} alt='더보기' />
        <p>전체</p>
      </TabButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  height: 83px;
  background: #ffffff;
  box-shadow: 0px -0.5px 0px #e0e0e0;
  backdrop-filter: blur(20px);
  border-radius: 20px 20px 0px 0px;
`;

const TabButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;

  & > p {
    padding: 0;
    margin: 0;
  }
`;

export default TabMenu;
