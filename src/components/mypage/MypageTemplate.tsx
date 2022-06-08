import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { openLoginModal } from '../../modules/modal/actions';
import { getUserInfoInMypageRequest } from '../../modules/mypage/actions';
import palette from '../../styles/palette';
import LoginModal from '../login/LoginModalTemplate';
import TabMenu from '../main/TabMenu';
import CustomerServiceSection from './CustomerServiceSection';
import MypageUserInfo from './MypageUserInfo';
import Terms from './Terms';

// ? 더보기 페이지 (마이페이지)
// ? url : /mypage

// TODO : 액세스토큰 useSelector 커스텀훅으로 바꾸기
// TODO : 서버사이드렌더링 이슈 해결하기(현재 : useEffect data fetching)

const MypageTemplate = () => {
  const dispatch = useDispatch();
  const loginModalIsClicked = useSelector(
    (state: RootState) => state.modalStates.loginModalIsClicked,
  );
  const accessToken = useSelector(
    (state: RootState) => state.loginState.accessToken,
  );

  const userId = useSelector((state: RootState) => state.loginState.userId);
  console.log(userId, '유저아이디');

  useEffect(() => {
    dispatch(getUserInfoInMypageRequest(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (!accessToken) {
      dispatch(openLoginModal());
    }
  }, [accessToken]);

  return (
    <React.Fragment>
      <Container>
        <MypageUserInfo />
        <Bar />

        <CustomerServiceSection />

        <Terms />
      </Container>

      {loginModalIsClicked && <LoginModal />}

      <TabMenu />
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: #fff;
  padding: 46px 0 83px;
`;

const Bar = styled.div`
  height: 8px;
  margin-top: 20px;

  background-color: ${palette.LightGray2};
  opacity: 0.5;
`;

export default MypageTemplate;
