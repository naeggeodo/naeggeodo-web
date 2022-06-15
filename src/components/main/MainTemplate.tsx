import React, { useEffect } from 'react';
import styled from 'styled-components';

import CategoryMenuSlide from './CategoryMenuSlide';
import TabMenu from './TabMenu';
import SearchPostCode from './SearchPostCode';
import PostCodeWebView from './PostCodeWebView';
import LoginModal from '../login/LoginModalTemplate';

import { useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { useCheckValidate } from '../../hooks/useCheckValidate';
import { getBuildingCodeRequest } from '../../modules/search-post-code/actions';
import NoItemText from './NoItemText';
import { useLoadLib } from '../../hooks/utils/useLoadLib';
import { useSelectLoginStates } from '../../hooks/select/useSelectLoginStates';
import ChatRoomList from './ChatRoomList';
import { CategoriesResponse } from '../../modules/common/types';

const MainTemplate = ({
  foodCategories,
}: {
  foodCategories: CategoriesResponse[];
}) => {
  const chatRooms = useSelector(
    (state: RootState) => state.mainPageState.chatRooms,
  );
  const { dispatch, router } = useLoadLib();

  const { checkTokenAndRedirection, openWebView, closeWebView } =
    useCheckValidate();

  const { user_id, accessToken } = useSelectLoginStates();

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
  }, [dispatch, user_id, accessToken, router]);

  return (
    <Container>
      <SearchPostCode openWebView={openWebView} />
      <CategoryMenuSlide foodCategories={foodCategories} />
      {chatRooms.length <= 0 ? (
        <NoItemText checkTokenAndRedirection={checkTokenAndRedirection} />
      ) : (
        <ChatRoomList />
      )}
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

export default React.memo(MainTemplate);
