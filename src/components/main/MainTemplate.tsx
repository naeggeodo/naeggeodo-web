import React, { useCallback, useState } from 'react';
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
import LoginModalTemplate from '../login/LoginModalTemplate';

const MainTemplate = ({
  foodCategories,
  chatRooms,
}: {
  foodCategories: CategoriesResponse[];
  chatRooms: ChatRoomItemResponse[];
}) => {
  const [webViewIsOpen, setWebViewIsOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const openWebView = useCallback(() => {
    setWebViewIsOpen(true);
  }, []);

  const closeWebView = useCallback(() => {
    setWebViewIsOpen(false);
  }, []);

  const openLogin = useCallback(() => {
    setLogin(!login);
  }, []);

  console.log(chatRooms);

  return (
    <Container>
      <SearchPostCode openWebView={openWebView} />
      <CategoryMenuSlide foodCategories={foodCategories} />
      <StyledUl>
        {chatRooms.map((item) => (
          <ChatRoomItem
            id={item.id}
            key={item.id}
            title={item.title}
            link={item.link}
            maxCount={item.maxCount}
            currentCount={item.currentCount}
            createDate={item.createDate}
          />
        ))}
      </StyledUl>
      <TabMenu />
      {webViewIsOpen && <PostCodeWebView closeWebView={closeWebView} />}
      {/* {login && <LoginModalTemplate />} */}

      <button onClick={openLogin}>로그인</button>
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

export default React.memo(MainTemplate);
