import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';

import CategoryMenuSlide from './CategoryMenuSlide';
import ChatRoomItem from './ChatRoomItem';
import TabMenu from './TabMenu';
import SearchPostCode from './SearchPostCode';
import PostCodeWebView from './PostCodeWebView';
import LoginModal from '../login/LoginModalTemplate';

import { CategoriesResponse } from '../../modules/main/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import palette from '../../styles/palette';
import { useCheckValidate } from '../../hooks/useCheckValidate';
import {
  closeSearchPostCode,
  openLoginModal,
  openSearchPostCode,
} from '../../modules/modal/actions';
import { getBuildingCodeRequest } from '../../modules/search-post-code/actions';
import { TOKEN_NAME } from '../../constant/Login';
import NoItemText from './NoItemText';

const MainTemplate = ({
  foodCategories,
}: {
  foodCategories: CategoriesResponse[];
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(TOKEN_NAME.ACCESS_TOKEN)) {
      dispatch(
        getBuildingCodeRequest(JSON.parse(localStorage.getItem('user')).id),
      );
    }
  }, [dispatch]);

  const { checkTokenAndRedirection } = useCheckValidate();
  const chatRooms = useSelector(
    (state: RootState) => state.mainPageState.chatRooms,
  );
  const loginModalIsClicked = useSelector(
    (state: RootState) => state.modalStates.loginModalIsClicked,
  );
  const searchPostCodeIsOpen = useSelector(
    (state: RootState) => state.modalStates.searchPostCodeIsOpen,
  );

  const openWebView = useCallback(() => {
    if (!localStorage.getItem(TOKEN_NAME.ACCESS_TOKEN)) {
      dispatch(openLoginModal());
    } else dispatch(openSearchPostCode());
  }, [dispatch]);

  const closeWebView = useCallback(() => {
    dispatch(closeSearchPostCode());
  }, [dispatch]);

  return (
    <Container>
      <SearchPostCode openWebView={openWebView} />
      <CategoryMenuSlide foodCategories={foodCategories} />
      {chatRooms.length <= 0 ? (
        <NoItemText checkTokenAndRedirection={checkTokenAndRedirection} />
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
      {loginModalIsClicked && <LoginModal />}
      {searchPostCodeIsOpen && <PostCodeWebView closeWebView={closeWebView} />}
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
