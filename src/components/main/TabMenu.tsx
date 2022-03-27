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
      <TabButton>
        <div>
          <img src={homeblack} alt='홈버튼' />
          <p>홈</p>
        </div>
      </TabButton>
      <TabButton>
        <div>
          <img src={searchgray} alt='검색' />
          <p>검색</p>
        </div>
      </TabButton>
      <TabButton>
        <div>
          <img src={plusgray} alt='추가하기' />
          <p>내꺼도 생성</p>
        </div>
      </TabButton>
      <TabButton>
        <div>
          <img src={chatgray} alt='채팅방' />
          <p>내꺼도</p>
        </div>
      </TabButton>
      <TabButton>
        <div>
          <img src={moregray} alt='더보기' />
          <p>전체</p>
        </div>
      </TabButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
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

  &:nth-of-type(-n + 4) > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50px;

    & > img {
      height: 24px;
    }
  }

  &:nth-of-type(5) > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50px;
    & > img {
      height: 6px;
      transform: translateY(160%);
    }
  }
`;

export default TabMenu;
