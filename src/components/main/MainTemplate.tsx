import React, { useState } from 'react';
import styled from 'styled-components';

import CategoryMenuSlide from './CategoryMenuSlide';
import ChatRoomItem from './ChatRoomItem';
import TabMenu from './TabMenu';
import SearchPostCode from './SearchPostCode';

import PostCodeWebView from './PostCodeWebView';
import {
  CategoriesResponse,
  ChatRoomItemResponse,
} from '../../modules/main/types';

const MainTemplate = ({
  foodCategories,
  chatRooms,
}: {
  foodCategories: CategoriesResponse[];
  chatRooms: ChatRoomItemResponse[];
}) => {
  const [webViewIsOpen, setWebViewIsOpen] = useState(false);

  const openWebView = () => {
    setWebViewIsOpen(true);
  };

  const closeWebView = () => {
    setWebViewIsOpen(false);
  };
  return (
    <Container>
      <SearchPostCode openWebView={openWebView} />
      <CategoryMenuSlide foodCategories={foodCategories} />
      <StyledUl>
        {chatRooms.map((item) => (
          <ChatRoomItem
            key={item.id}
            title={item.title}
            link={item.link}
            maxCount={item.maxCount}
            currentCount={item.currentCount}
            createDate={item.createDate}
          />
        ))}
      </StyledUl>
      {webViewIsOpen && <PostCodeWebView closeWebView={closeWebView} />}
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
