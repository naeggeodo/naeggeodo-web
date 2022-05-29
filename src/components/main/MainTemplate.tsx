import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import CategoryMenuSlide from './CategoryMenuSlide';
import ChatRoomItem from './ChatRoomItem';
import TabMenu from './TabMenu';
import SearchPostCode from './SearchPostCode';

import PostCodeWebView from './PostCodeWebView';
import { CategoriesResponse } from '../../modules/main/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import palette from '../../styles/palette';
import { useRouter } from 'next/router';
import { TOKEN_NAME } from '../../constant/Login';
import LoginModal from '../login/LoginModalTemplate';
import { openLoginModal } from '../../modules/login/actions';

const MainTemplate = ({
  foodCategories,
}: {
  foodCategories: CategoriesResponse[];
}) => {
  const [webViewIsOpen, setWebViewIsOpen] = useState(false);
  const chatRooms = useSelector(
    (state: RootState) => state.mainPageState.chatRooms,
  );
  const isClicked = useSelector(
    (state: RootState) => state.KakaoLoginState.isClicked,
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const openWebView = useCallback(() => {
    setWebViewIsOpen(true);
  }, []);

  const closeWebView = useCallback(() => {
    setWebViewIsOpen(false);
  }, []);

  const checkTokenAndRedirection = useCallback(() => {
    if (!localStorage.getItem(TOKEN_NAME.ACCESS_TOKEN)) {
      dispatch(openLoginModal());
    }
  }, [dispatch]);

  return (
    <Container>
      <SearchPostCode openWebView={openWebView} />
      <CategoryMenuSlide foodCategories={foodCategories} />
      {chatRooms.length <= 0 ? (
        <NoItemStyle>
          <CreateButtonContainer>
            <NoItemText>지금 직접 채팅방을 생성해보세요 🍟</NoItemText>
            <CreateButton onClick={checkTokenAndRedirection}>
              채팅방 생성하러가기
            </CreateButton>
          </CreateButtonContainer>
        </NoItemStyle>
      ) : (
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
      )}

      <TabMenu />
      {isClicked && <LoginModal />}
      {webViewIsOpen && <PostCodeWebView closeWebView={closeWebView} />}
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

const NoItemStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80vh;
`;

const CreateButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const NoItemText = styled.p`
  font-size: 1.3125rem;
`;

const CreateButton = styled.button`
  all: unset;
  border-radius: 10px;
  height: 40px;
  padding: 0 15px;

  background-color: ${palette.mainOrange};
  color: #ffffff;

  cursor: pointer;
`;

export default React.memo(MainTemplate);
