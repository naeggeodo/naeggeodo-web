import axios from 'axios';
import React from 'react';
import { END } from 'redux-saga';
import MypageTemplate from '../../components/mypage/MypageTemplate';
import { removeSsrTokens } from '../../hooks/utils/removeSsrTokens';
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

    axios.defaults.headers['Authorization'] = '';
    if (context.req && context.req.headers.cookie) {
      axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    removeSsrTokens(context, store);

    if (!accessToken) {
      return {
        redirect: {
          permanent: false,
          destination: '/login',
        },
      };
    }

    store.dispatch(getUserInfoInMypageRequest(user_id));

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {},
    };
  },
);

export default Mypage;
