import { createReducer } from 'typesafe-actions';
import { GET_SEARCH_TAG_LIST_SUCCESS } from './actions';
import { SearchTagListResponse } from './types';

type SearchPageState = {
  searchTagList: SearchTagListResponse | null;
};

const initialSearchPageState: SearchPageState = {
  searchTagList: null,
};

export const searchPageState = createReducer<SearchPageState>(
  initialSearchPageState,
  {
    [GET_SEARCH_TAG_LIST_SUCCESS]: (state, action) => ({
      ...state,
      searchTagList: action.payload,
    }),
  },
);
