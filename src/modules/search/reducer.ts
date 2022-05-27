import { createReducer } from 'typesafe-actions';
import {
  GET_RESULT_BY_INPUT_SUCCESS,
  GET_RESULT_BY_TAG_SUCCESS,
  GET_SEARCH_TAG_LIST_SUCCESS,
} from './actions';
import { SearchResultListResponse, SearchTagListResponse } from './types';

type SearchPageState = {
  searchTagList: SearchTagListResponse | null;
  searchResultList: SearchResultListResponse | null;
};

const initialSearchPageState: SearchPageState = {
  searchTagList: null,
  searchResultList: null,
};

export const searchPageState = createReducer<SearchPageState>(
  initialSearchPageState,
  {
    [GET_SEARCH_TAG_LIST_SUCCESS]: (state, action) => ({
      ...state,
      searchTagList: action.payload,
    }),
    [GET_RESULT_BY_TAG_SUCCESS]: (state, action) => ({
      ...state,
      searchResultList: action.payload,
    }),
    [GET_RESULT_BY_INPUT_SUCCESS]: (state, action) => ({
      ...state,
      searchResultList: action.payload,
    }),
  },
);
