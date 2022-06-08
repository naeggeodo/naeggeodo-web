import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import SearchTemplate from '../../components/search/SearchTemplate';
import { RootState, wrapper } from '../../modules';
import { saveCookies } from '../../utils/saveCookies';

const Search = () => {
  return <SearchTemplate />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    saveCookies(store, context);

    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {},
    };
  },
);

export default Search;
