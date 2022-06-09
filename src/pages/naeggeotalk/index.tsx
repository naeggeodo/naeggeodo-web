import cookies from 'next-cookies';
import { useEffect } from 'react';
import { END } from 'redux-saga';

import NaeggeotalkTemplate from '../../components/naeggeotalk/NaeggeotalkTemplate';
import { wrapper } from '../../modules';
import { getNaeggeotalkListActions } from '../../modules/naeggeotalk/actions';
import { axiosInstance } from '../../service/api';
import { createCustomHeader } from '../../utils/createCustomHeader';

const naeggeotalk = () => {
  return <NaeggeotalkTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    axiosInstance.interceptors.request.use(
      async function (config) {
        try {
          const allCookies = cookies(context);
          const accessToken = allCookies.accessToken;
          config.headers = createCustomHeader(accessToken);
          return config;
        } catch (error) {
          console.log(error);
        }
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    store.dispatch(getNaeggeotalkListActions.request('1'));

    store.dispatch(END);

    await store.sagaTask.toPromise();

    return {
      props: {
        naeggeotalkList: store.getState().naeggeotalkState.naeggeotalkList,
      },
    };
  },
);

export default naeggeotalk;
