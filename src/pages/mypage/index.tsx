import cookies from 'next-cookies';
import React from 'react';
import { END } from 'redux-saga';
import MypageTemplate from '../../components/mypage/MypageTemplate';
import { wrapper } from '../../modules';
import { axiosInstance } from '../../service/api';
import { saveCookies } from '../../utils/saveCookies';

const Mypage = () => {
  return <MypageTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    const customHeader = (accessToken) => {
      return {
        Authorization: `Bearer ${accessToken}`,
      };
    };
    axiosInstance.interceptors.request.use(
      async function (config) {
        try {
          const allCookies = cookies(context);
          const accessToken = allCookies.accessToken;
          config.headers = customHeader(accessToken);
          return config;
        } catch (error) {
          console.log(error);
        }
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {},
    };
  },
);

export default Mypage;
