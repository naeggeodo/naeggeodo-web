import React from 'react';
import { END } from 'redux-saga';

import SearchTemplate from '../../components/search/SearchTemplate';
import { wrapper } from '../../modules';
import {
  getResultByTagActions,
  getSearchTagListActions,
} from '../../modules/search/actions';

const Search = () => {
  return <SearchTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const keyword = encodeURI(context.query.keyword as string);

    store.dispatch(getSearchTagListActions.request());

    store.dispatch(getResultByTagActions.request(keyword));

    console.log(typeof context.query.keyword, 'wayne');

    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {},
    };
  },
);

export default Search;
