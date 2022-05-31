import { AxiosError } from 'axios';
import { createAsyncAction } from 'typesafe-actions';
import { NaeggeotalkListResponse } from './types';

const namespace = 'naeggeotalk/';

export const GET_NAEGGEOTALK_LIST_REQUEST =
  namespace + 'GET_NAEGGEOTALK_LIST_REQUEST';

export const GET_NAEGGEOTALK_LIST_SUCCESS =
  namespace + 'GET_NAEGGEOTALK_LIST_SUCCESS';

export const GET_NAEGGEOTALK_LIST_FAILURE =
  namespace + 'GET_NAEGGEOTALK_LIST_FAILURE';

export const getNaeggeotalkListActions = createAsyncAction(
  GET_NAEGGEOTALK_LIST_REQUEST,
  GET_NAEGGEOTALK_LIST_SUCCESS,
  GET_NAEGGEOTALK_LIST_FAILURE,
)<string, NaeggeotalkListResponse, AxiosError>();
