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

export const SET_REPORT_MODAL = namespace + 'SET_REPORT_MODAL';
export const SET_REPORT_CONFIRM_MODAL = namespace + 'SET_REPORT_CONFIRM_MODAL';

export const getUserInfoInMypageRequest = createAction(
  GET_USER_INFO_IN_MYPAGE_REQUEST,
  (userId) => userId,
)();

export const getUserInfoInMypageSuccess = createAction(
  GET_USER_INFO_IN_MYPAGE_SUCCESS,
  (data) => data,
)();

export const getUserInfoInMypageFailure = createAction(
  GET_USER_INFO_IN_MYPAGE_FAILURE,
  () => ({}),
)();

export const setReportModal = createAction(
  SET_REPORT_MODAL,
  (value) => value,
)();
export const setReportConfirmModal = createAction(
  SET_REPORT_CONFIRM_MODAL,
  (value) => value,
)();
