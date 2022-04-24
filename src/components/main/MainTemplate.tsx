import React, { useState } from 'react';
import styled from 'styled-components';

import CategoryMenuSlide from './CategoryMenuSlide';
import ChatRoomItem from './ChatRoomItem';
import TabMenu from './TabMenu';
import SearchPostCode from './SearchPostCode';

import { categoryMockData, chatListMockData } from './data';
import PostCodeWebView from './PostCodeWebView';

const MainTemplate = () => {
  const [webViewIsOpen, setWebViewIsOpen] = useState(false);

  const openWebView = () => {
    setWebViewIsOpen(true);
  };

  return (
    <Container>
      <SearchPostCode openWebView={openWebView} />
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
      {webViewIsOpen && <PostCodeWebView />}
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
