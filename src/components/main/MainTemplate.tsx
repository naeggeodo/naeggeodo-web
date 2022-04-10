import React, { useEffect } from 'react';
import styled from 'styled-components';

import CategoryMenuSlide from './CategoryMenuSlide';
import ChatRoomItem from './ChatRoomItem';
import TabMenu from './TabMenu';

import { categoryMockData, chatListMockData } from './data';
import { useKakaoLogin } from '../../hooks/useKakaoLogin';

const MainTemplate = ({ book }: { book: any }) => {
  const { getToken } = useKakaoLogin();
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    getToken(code);
  }, []);
  return (
    <Container>
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
  background-color: #ffffff;
`;

const StyledUl = styled.ul`
  padding: 10px 16px 50px;
  background-color: #ffffff;
`;

export default MainTemplate;
