import React from 'react';
import styled from 'styled-components';

import CategoryMenuSlide from './CategoryMenuSlide';
import ChatRoomItem from './ChatRoomItem';
import TabMenu from './TabMenu';

import { categoryMockData, chatListMockData } from './data';
import SearchPostCode from './SearchPostCode';

const MainTemplate = () => {
  return (
    <Container>
      <SearchPostCode />
      <CategoryMenuSlide categories={categoryMockData} />
      <StyledUl>
        {chatListMockData.map((item) => (
          <ChatRoomItem
            key={item.id}
            title={item.title + item.id}
            chattingUrl={item.chattingUrl}
            total={item.total}
            numOfPeople={item.numOfPeople}
            registerTime={item.registerTime}
          />
        ))}
      </StyledUl>
      <TabMenu />
    </Container>
  );
};

const Container = styled.div`
  padding-top: 36px;
  background-color: #ffffff;
`;

const StyledUl = styled.ul`
  padding: 10px 16px 50px;
  background-color: #ffffff;
`;

export default MainTemplate;
