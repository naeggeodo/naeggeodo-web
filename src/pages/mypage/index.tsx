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
    const stateAccessToken = rootState.loginState.accessToken;

    const allCookies = cookies(context);
    const accessToken = allCookies.accessToken;
    removeCookiesServerside(context);

    if (!accessToken) {
      return {
        redirect: {
          permanent: false,
          destination: '/login',
        },
      };
    }
    axiosInstance.interceptors.request.use(
      async function (config) {
        try {
          if (accessToken && allCookies) {
            config.headers = createCustomHeader(accessToken);
            return config;
          }
        } catch (error) {
          console.log(error);
        }
      },
      function (error) {
        return Promise.reject(error);
      },
    );

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
