import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { SearchTagListResponse } from './types';

const namespace = 'search/';

export const GET_SEARCH_TAG_LIST_REQUEST =
  namespace + 'GET_SEARCH_TAG_LIST_REQUEST';

export const GET_SEARCH_TAG_LIST_SUCCESS =
  namespace + 'GET_SEARCH_TAG_LIST_SUCCESS';

export const GET_SEARCH_TAG_LIST_FAILURE =
  namespace + 'GET_SEARCH_TAG_LIST_FAILURE';

export const getSearchTagListActions = createAsyncAction(
  GET_SEARCH_TAG_LIST_REQUEST,
  GET_SEARCH_TAG_LIST_SUCCESS,
  GET_SEARCH_TAG_LIST_FAILURE,
)<void, SearchTagListResponse, AxiosError>();
