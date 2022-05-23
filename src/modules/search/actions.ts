import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { SearchResultListResponse, SearchTagListResponse } from './types';

const namespace = 'search/';

export const GET_SEARCH_TAG_LIST_REQUEST =
  namespace + 'GET_SEARCH_TAG_LIST_REQUEST';

export const GET_SEARCH_TAG_LIST_SUCCESS =
  namespace + 'GET_SEARCH_TAG_LIST_SUCCESS';

export const GET_SEARCH_TAG_LIST_FAILURE =
  namespace + 'GET_SEARCH_TAG_LIST_FAILURE';

export const GET_RESULT_BY_TAG_REQUEST =
  namespace + 'GET_RESULT_BY_TAG_REQUEST';

export const GET_RESULT_BY_TAG_SUCCESS =
  namespace + 'GET_RESULT_BY_TAG_SUCCESS';

export const GET_RESULT_BY_TAG_FAILURE =
  namespace + 'GET_RESULT_BY_TAG_FAILURE';

export const GET_RESULT_BY_INPUT_REQUEST =
  namespace + 'GET_RESULT_BY_INPUT_REQUEST';

export const GET_RESULT_BY_INPUT_SUCCESS =
  namespace + 'GET_RESULT_BY_INPUT_SUCCESS';

export const GET_RESULT_BY_INPUT_FAILURE =
  namespace + 'GET_RESULT_BY_INPUT_FAILURE';

export const getSearchTagListActions = createAsyncAction(
  GET_SEARCH_TAG_LIST_REQUEST,
  GET_SEARCH_TAG_LIST_SUCCESS,
  GET_SEARCH_TAG_LIST_FAILURE,
)<void, SearchTagListResponse, AxiosError>();

export const getResultByTagActions = createAsyncAction(
  GET_RESULT_BY_TAG_REQUEST,
  GET_RESULT_BY_TAG_SUCCESS,
  GET_RESULT_BY_TAG_FAILURE,
)<string, SearchResultListResponse, AxiosError>();

export const getResultByInputActions = createAsyncAction(
  GET_RESULT_BY_INPUT_REQUEST,
  GET_RESULT_BY_INPUT_SUCCESS,
  GET_RESULT_BY_INPUT_FAILURE,
)<string, SearchResultListResponse, AxiosError>();
