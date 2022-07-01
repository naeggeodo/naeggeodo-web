import React from 'react';
import { END } from 'redux-saga';

import SearchTemplate from '../../components/search/SearchTemplate';
import { wrapper } from '../../modules';
import {
  getResultByInputActions,
  getResultByTagActions,
  getSearchTagListActions,
} from '../../modules/search/actions';
import { saveCookies } from '../../utils/saveCookies';

const Search = () => {
  return <SearchTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

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
