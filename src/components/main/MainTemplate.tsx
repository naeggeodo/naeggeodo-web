import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  const limit = 5;
  const dispatch = useDispatch();
  const { checkTokenAndRedirection } = useCheckValidate();
  const [skip, setSkip] = useState(0);
  const [dataList, setDataList] = useState([]);

  const target = useRef<HTMLDivElement>(null);
  const chatRooms = useSelector(
    (state: RootState) => state.mainPageState.chatRooms,
  );

  useEffect(() => {
    if (chatRooms) {
      const observer = new IntersectionObserver(callback, { threshold: 0.5 });
      observer.observe(target.current);

      return () => {
        observer && observer.disconnect();
      };
    }
  }, [chatRooms]);

  useEffect(() => {
    if (chatRooms && skip <= chatRooms.length) {
      const arr = [];
      for (let i = skip; i < chatRooms.length; i++) {
        if (arr.length > limit) break;
        arr.push(chatRooms[i]);
      }
      setDataList((prev) => [...prev, ...arr]);
    }
  }, [skip, chatRooms]);

  const callback = async ([entry], observer: IntersectionObserver) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      setSkip((prev) => prev + limit + 1);
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    if (localStorage.getItem(TOKEN_NAME.ACCESS_TOKEN)) {
      dispatch(
        getBuildingCodeRequest(JSON.parse(localStorage.getItem('user')).id),
      );
    }
  }, [dispatch]);

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
