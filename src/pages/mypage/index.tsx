import React from 'react';
import { END } from 'redux-saga';
import MypageTemplate from '../../components/mypage/MypageTemplate';
import { RootState, wrapper } from '../../modules';
import { getUserInfoInMypageRequest } from '../../modules/mypage/actions';
import { saveCookies } from '../../utils/saveCookies';

const Mypage = () => {
  return <MypageTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);
    const rootState: RootState = store.getState();

    const user_id = rootState.loginState.user_id;
    const accessToken = rootState.loginState.accessToken;

    store.dispatch(getUserInfoInMypageRequest(user_id));

    store.dispatch(END);
    await store.sagaTask.toPromise();

    if (!accessToken) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  },
);

export default Mypage;
