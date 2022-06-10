import React from 'react';
import { END } from 'redux-saga';

import SearchTemplate from '../../components/search/SearchTemplate';
import { wrapper } from '../../modules';
import {
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

    console.log(context.query.tag, 'wayen');

    store.dispatch(getResultByTagActions.request(context.query.tag as string));

    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {},
    };
  },
);

export default Search;
