import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import CategoryMenuSlide from './CategoryMenuSlide';
import ChatRoomItem from './ChatRoomItem';
import TabMenu from './TabMenu';
import SearchPostCode from './SearchPostCode';
import PostCodeWebView from './PostCodeWebView';
import LoginModal from '../login/LoginModalTemplate';

import { CategoriesResponse } from '../../modules/main/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { useCheckValidate } from '../../hooks/useCheckValidate';
import { getBuildingCodeRequest } from '../../modules/search-post-code/actions';
import NoItemText from './NoItemText';
import { useLoadLoginStates } from '../../hooks/auth/useLoadLoginStates';
import { useLoadLib } from '../../hooks/utils/useLoadLib';
import { useInfiniteScroll } from '../../hooks/reder/useInfiniteScroll';

const MainTemplate = ({
  foodCategories,
}: {
  foodCategories: CategoriesResponse[];
}) => {
  const chatRooms = useSelector(
    (state: RootState) => state.mainPageState.chatRooms,
  );
  const { dispatch } = useLoadLib();

  const { checkTokenAndRedirection, openWebView, closeWebView } =
    useCheckValidate();

  const { target, dataList } = useInfiniteScroll(chatRooms);

  const { user_id, accessToken } = useLoadLoginStates();

  const loginModalIsClicked = useSelector(
    (state: RootState) => state.modalStates.loginModalIsClicked,
  );
  const searchPostCodeIsOpen = useSelector(
    (state: RootState) => state.modalStates.searchPostCodeIsOpen,
  );

  useEffect(() => {
    if (accessToken) {
      dispatch(getBuildingCodeRequest(user_id));
    }
  }, [dispatch, user_id, accessToken]);

  return (
    <Container>
      <SearchPostCode openWebView={openWebView} />
      <CategoryMenuSlide foodCategories={foodCategories} />
      {chatRooms.length <= 0 ? (
        <NoItemText checkTokenAndRedirection={checkTokenAndRedirection} />
      ) : (
        <StyledUl>
          {dataList.map((item) => (
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
      <div ref={target}></div>
      {loginModalIsClicked && <LoginModal />}
      {searchPostCodeIsOpen && <PostCodeWebView closeWebView={closeWebView} />}
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

export default React.memo(MainTemplate);
