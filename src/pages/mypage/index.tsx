import axios from 'axios';
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

    const user_id = rootState.loginState.user_id;

    // removeCookiesServerside(context);

    const allCookies = cookies(context);
    console.log(allCookies, 'celebrity, iu');
    console.log(context.req.headers.cookie, 'cookie, suzi');

    const accessToken = allCookies.accessToken;
    axios.defaults.headers['Authorzation'] = '';
    if (context.req && context.req.headers.cookie) {
      axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
    }

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
    //       const cookie = context.req ? context.req.headers.cookie : '';

    //       if (context.req && cookie) {
    //         config.headers = createCustomHeader(cookies(context).accessToken);
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

    store.dispatch(getUserInfoInMypageRequest(user_id));

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {},
    };
  },
);

export default Mypage;
