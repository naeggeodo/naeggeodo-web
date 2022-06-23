import { createReducer } from 'typesafe-actions';
import {
  GET_RESULT_BY_INPUT_SUCCESS,
  GET_RESULT_BY_TAG_SUCCESS,
  GET_SEARCH_TAG_LIST_SUCCESS,
  SELECT_SEARCH_TAG,
} from './actions';
import { SearchResultListResponse, SearchTagListResponse } from './types';

type SearchPageState = {
  searchTagList: SearchTagListResponse;
  searchResultList: SearchResultListResponse | null;
  selected: string | null;
};

const initialSearchPageState: SearchPageState = {
  searchTagList: {
    tags: [],
  },
  searchResultList: null,
  selected: null,
};

export const searchPageState = createReducer<SearchPageState>(
  initialSearchPageState,
  {
    [GET_SEARCH_TAG_LIST_SUCCESS]: (state, action) => ({
      ...state,
      searchTagList: {
        ...state.searchTagList,
        tags: action.payload,
      },
    }),
    [GET_RESULT_BY_TAG_SUCCESS]: (state, action) => ({
      ...state,
      searchResultList: action.payload,
    }),
    [GET_RESULT_BY_INPUT_SUCCESS]: (state, action) => ({
      ...state,
      searchResultList: action.payload,
    }),
    [SELECT_SEARCH_TAG]: (state, action) => ({
      ...state,
      selected: action.payload,
    }),
  },
);
