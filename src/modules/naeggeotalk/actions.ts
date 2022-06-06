import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import {
  NaeggeotalkItemBookmarkRequest,
  NaeggeotalkListResponse,
} from './types';

const namespace = 'naeggeotalk/';

export const GET_NAEGGEOTALK_LIST_REQUEST =
  namespace + 'GET_NAEGGEOTALK_LIST_REQUEST';

export const GET_NAEGGEOTALK_LIST_SUCCESS =
  namespace + 'GET_NAEGGEOTALK_LIST_SUCCESS';

export const GET_NAEGGEOTALK_LIST_FAILURE =
  namespace + 'GET_NAEGGEOTALK_LIST_FAILURE';

export const SET_NAEGGEOTALK_ITEM_BOOKMARK_REQUEST =
  namespace + 'SET_NAEGGEOTALK_ITEM_BOOKMARK';

export const SET_NAEGGEOTALK_ITEM_BOOKMARK_SUCCESS =
  namespace + 'SET_NAEGGEOTALK_ITEM_BOOKMARK_SUCCESS';

export const SET_NAEGGEOTALK_ITEM_BOOKMARK_FAILURE =
  namespace + 'SET_NAEGGEOTALK_ITEM_BOOKMARK_FAILURE';

export const getNaeggeotalkListActions = createAsyncAction(
  GET_NAEGGEOTALK_LIST_REQUEST,
  GET_NAEGGEOTALK_LIST_SUCCESS,
  GET_NAEGGEOTALK_LIST_FAILURE,
)<string, NaeggeotalkListResponse, AxiosError>();

export const setNaeggeotalkItemBookmarkActions = createAsyncAction(
  SET_NAEGGEOTALK_ITEM_BOOKMARK_REQUEST,
  SET_NAEGGEOTALK_ITEM_BOOKMARK_SUCCESS,
  SET_NAEGGEOTALK_ITEM_BOOKMARK_FAILURE,
)<NaeggeotalkItemBookmarkRequest, void, AxiosError>();
