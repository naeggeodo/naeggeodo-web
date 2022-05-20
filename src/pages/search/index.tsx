import React from 'react';
import { END } from 'redux-saga';

import SearchTemplate from '../../components/search/SearchTemplate';
import { wrapper } from '../../modules';
import { getSearchTagListActions } from '../../modules/search/actions';
import { SearchTagListResponse } from '../../modules/search/types';

const Search = ({ tags }: SearchTagListResponse) => {
  return <SearchTemplate tags={tags} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getSearchTagListActions.request());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      props: {
        tags: store.getState().searchPageState.searchTagList.tags,
      },
    };
  },
);

export default Search;
