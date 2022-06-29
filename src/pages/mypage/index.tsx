import axios from 'axios';
import { removeCookies } from 'cookies-next';
import cookies from 'next-cookies';
import React from 'react';
import { END } from 'redux-saga';
import MypageTemplate from '../../components/mypage/MypageTemplate';
import { RootState, wrapper } from '../../modules';
import { getUserInfoInMypageRequest } from '../../modules/mypage/actions';
import { axiosInstance } from '../../service/api';
import { createCustomHeader } from '../../utils/createCustomHeader';
import { removeCookiesServerside } from '../../utils/removeCookiesServerside';
import { saveCookies } from '../../utils/saveCookies';

const Mypage = () => {
  return <MypageTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);
    const rootState: RootState = store.getState();
    let user_id = rootState.loginState.user_id;
    let accessToken = rootState.loginState.accessToken;

    axios.defaults.headers.common['Authorization'] = '';
    if (context.req && context.req.headers.cookie) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }

    store.dispatch(getUserInfoInMypageRequest(user_id));

    user_id = '';
    accessToken = '';

    // const rootState: RootState = store.getState();
    // const user_id = rootState.loginState.user_id;
    // const clientAccessToken = rootState.loginState.accessToken;
    // const stateAccessToken = rootState.loginState.accessToken;

    // const allCookies = cookies(context);
    // const accessToken = allCookies.accessToken;
    // removeCookiesServerside(context);

    // if (!accessToken) {
    //   return {
    //     redirect: {
    //       permanent: false,
    //       destination: '/login',
    //     },
    //   };
    // }
    // axiosInstance.interceptors.request.use(
    //   async function (config) {
    //     try {
    //       const cookie = context.req ? context.req.cookies : '';
    //       config.headers = {
    //         Authorization: '',
    //       };
    //       if (context.req && cookie) {
    //         const validAccessToken = cookie.accessToken;
    //         config.headers = createCustomHeader(validAccessToken);
    //       }
    //       return config;
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   },
    //   function (error) {
    //     return Promise.reject(error);
    //   },
    // );

    store.dispatch(END);
    await store.sagaTask.toPromise();

    // if (!accessToken) {
    //   return {
    //     redirect: {
    //       destination: '/login',
    //       permanent: false,
    //     },
    //   };
    // }

    return {
      props: {},
    };
  },
);

export default Mypage;
