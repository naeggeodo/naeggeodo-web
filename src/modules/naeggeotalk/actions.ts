import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { NaeggeotalkItemBookmarkRequest } from './types';

const namespace = 'naeggeotalk/';

export const SET_NAEGGEOTALK_ITEM_BOOKMARK_REQUEST =
  namespace + 'SET_NAEGGEOTALK_ITEM_BOOKMARK';

export const SET_NAEGGEOTALK_ITEM_BOOKMARK_SUCCESS =
  namespace + 'SET_NAEGGEOTALK_ITEM_BOOKMARK_SUCCESS';

export const SET_NAEGGEOTALK_ITEM_BOOKMARK_FAILURE =
  namespace + 'SET_NAEGGEOTALK_ITEM_BOOKMARK_FAILURE';

export const setNaeggeotalkItemBookmarkActions = createAsyncAction(
  SET_NAEGGEOTALK_ITEM_BOOKMARK_REQUEST,
  SET_NAEGGEOTALK_ITEM_BOOKMARK_SUCCESS,
  SET_NAEGGEOTALK_ITEM_BOOKMARK_FAILURE,
)<NaeggeotalkItemBookmarkRequest, void, AxiosError>();
