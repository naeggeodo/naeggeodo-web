import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { MyPageUserInfoResponse } from './types';

const namespace = 'mypage/';

export const GET_USER_INFO_IN_MYPAGE_REQUEST =
  namespace + 'GET_USER_INFO_IN_MYPAGE_REQUEST';
export const GET_USER_INFO_IN_MYPAGE_SUCCESS =
  namespace + 'GET_USER_INFO_IN_MYPAGE_SUCCESS';
export const GET_USER_INFO_IN_MYPAGE_FAILURE =
  namespace + 'GET_USER_INFO_IN_MYPAGE_FAILURE';

export const getUserInfoInMypageRequest = createAction(
  GET_USER_INFO_IN_MYPAGE_REQUEST,
  (userId) => userId,
)();

export const getUserInfoInMypageSuccess = createAction(
  GET_USER_INFO_IN_MYPAGE_SUCCESS,
  (nickname, myOrdersCount, participatingChatCount) => ({
    nickname,
    myOrdersCount,
    participatingChatCount,
  }),
)();

export const getUserInfoInMypageFailure = createAction(
  GET_USER_INFO_IN_MYPAGE_FAILURE,
  () => ({}),
)();

export const getUserInfoInMypageActions = createAsyncAction(
  GET_USER_INFO_IN_MYPAGE_REQUEST,
  GET_USER_INFO_IN_MYPAGE_SUCCESS,
  GET_USER_INFO_IN_MYPAGE_FAILURE,
)<void, MyPageUserInfoResponse, AxiosError>();
