import React from 'react';
import { END } from 'redux-saga';

import SearchTemplate from '../../components/search/SearchTemplate';
import { RootState, wrapper } from '../../modules';
import {
  getResultByInputActions,
  getResultByTagActions,
  getSearchTagListActions,
} from '../../modules/search/actions';
import { axiosInstance } from '../../service/api';
import { createCustomHeader } from '../../utils/createCustomHeader';
import { saveCookies } from '../../utils/saveCookies';

const Search = () => {
  return <SearchTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    const rootState: RootState = store.getState();
    const accessToken = rootState.loginState.accessToken;

    axiosInstance.interceptors.request.use(
      async function (config) {
        try {
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

    store.dispatch(getSearchTagListActions.request());

    if (context.query.tag) {
      store.dispatch(
        getResultByTagActions.request(decodeURI(context.query.tag as string)),
      );
    } else if (context.query.keyword) {
      store.dispatch(
        getResultByInputActions.request(context.query.keyword as string),
      );
    }

    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {},
    };
  },
);

export default Search;
