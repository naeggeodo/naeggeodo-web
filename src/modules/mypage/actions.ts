import { AxiosError } from 'axios';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { MyPageUserInfoResponse, ReportRequestBody } from './types';

const namespace = 'mypage/';

export const GET_USER_INFO_IN_MYPAGE_REQUEST =
  namespace + 'GET_USER_INFO_IN_MYPAGE_REQUEST';
export const GET_USER_INFO_IN_MYPAGE_SUCCESS =
  namespace + 'GET_USER_INFO_IN_MYPAGE_SUCCESS';
export const GET_USER_INFO_IN_MYPAGE_FAILURE =
  namespace + 'GET_USER_INFO_IN_MYPAGE_FAILURE';

export const SET_REPORT_MODAL = namespace + 'SET_REPORT_MODAL';
export const SET_REPORT_CONFIRM_MODAL = namespace + 'SET_REPORT_CONFIRM_MODAL';

export const SUBMIT_REPORT_REQUEST = namespace + 'SUBMIT_REPORT_REQUEST';
export const SUBMIT_REPORT_SUCCESS = namespace + 'SUBMIT_REPORT_SUCCESS';
export const SUBMIT_REPORT_FAILURE = namespace + 'SUBMIT_REPORT_FAILURE';

export const SET_MODAL_ANIMATION_START =
  namespace + 'SET_MODAL_ANIMATION_START';

export const CLOSE_REPORT_CONFIRM_MODAL_REQUEST =
  namespace + 'CLOSE_REPORT_CONFIRM_MODAL_REQUEST';
export const CLOSE_REPORT_CONFIRM_MODAL_SUCCESS =
  namespace + 'CLOSE_REPORT_CONFIRM_MODAL_SUCCESS';
export const CLOSE_REPORT_CONFIRM_MODAL_FAILURE =
  namespace + 'CLOSE_REPORT_CONFIRM_MODAL_FAILURE';

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

export const submitReportActions = createAsyncAction(
  SUBMIT_REPORT_REQUEST,
  SUBMIT_REPORT_SUCCESS,
  SUBMIT_REPORT_FAILURE,
)<ReportRequestBody, ReportRequestBody, AxiosError>();

export const setModalAnimationStart = createAction(
  SET_MODAL_ANIMATION_START,
  (value) => value,
)();

export const closeReportConfirmModalActions = createAsyncAction(
  CLOSE_REPORT_CONFIRM_MODAL_REQUEST,
  CLOSE_REPORT_CONFIRM_MODAL_SUCCESS,
  CLOSE_REPORT_CONFIRM_MODAL_FAILURE,
)<void, void, void>();
