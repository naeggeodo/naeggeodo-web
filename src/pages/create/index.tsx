import { removeCookies } from 'cookies-next';
import cookies from 'next-cookies';
import React from 'react';
import { END } from 'redux-saga';
import CreateTemplate from '../../components/create/CreateTemplate';
import { RootState, wrapper } from '../../modules';
import {
  getPrevCreatedListActions,
  saveBuildingCode,
  saveUserId,
} from '../../modules/create/actions';
import { axiosInstance } from '../../service/api';
import { createCustomHeader } from '../../utils/createCustomHeader';
import { removeCookiesServerside } from '../../utils/removeCookiesServerside';
import { saveCookies } from '../../utils/saveCookies';

const create = () => {
  return <CreateTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    const rootState: RootState = store.getState();
    const user_id = rootState.loginState.user_id;
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
          } else {
            config.headers = {};
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

    if (accessToken) {
      store.dispatch(getPrevCreatedListActions.request(user_id));
      store.dispatch(saveUserId(rootState.loginState.user_id));
      store.dispatch(saveBuildingCode(rootState.loginState.buildingCode));

      store.dispatch(END);

      await store.sagaTask.toPromise();

      return {
        props: {},
      };
    } else {
      return {
        props: {},
        redirect: {
          permanent: false,
          destination: '/login',
        },
      };
    }
  },
);

export default create;
