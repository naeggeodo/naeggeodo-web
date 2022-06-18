import { createReducer } from 'typesafe-actions';
import {
  GET_USER_INFO_IN_MYPAGE_SUCCESS,
  SET_MODAL_ANIMATION_START,
  SET_REPORT_CONFIRM_MODAL,
  SET_REPORT_MODAL,
  SUBMIT_REPORT_SUCCESS,
} from './actions';

import { MyPageUserInfoResponse, ReportRequestBody } from './types';

interface MyPageState {
  userInfo: MyPageUserInfoResponse;
  reportModal: string;
  reportConfirmModal: string;
  reportInfo: ReportRequestBody | null;
  isModalAnimationStart: boolean;
}

const initialState: MyPageState = {
  userInfo: {
    nickname: '',
    myOrdersCount: null,
    participatingChatCount: null,
  },
  reportModal: '',
  reportConfirmModal: '',
  reportInfo: null,
  isModalAnimationStart: false,
};

export const myPageState = createReducer<MyPageState>(initialState, {
  [GET_USER_INFO_IN_MYPAGE_SUCCESS]: (state, action) => ({
    ...state,
    userInfo: {
      ...state.userInfo,
      nickname: action.payload.nickname,
      myOrdersCount: action.payload.myOrdersCount,
      participatingChatCount: action.payload.participatingChatCount,
    },
  }),
  [SET_REPORT_MODAL]: (state, action) => ({
    ...state,
    reportModal: action.payload,
  }),
  [SET_REPORT_CONFIRM_MODAL]: (state, action) => ({
    ...state,
    reportConfirmModal: action.payload,
  }),
  [SUBMIT_REPORT_SUCCESS]: (state, action) => ({
    ...state,
    reportInfo: action.payload,
  }),
  [SET_MODAL_ANIMATION_START]: (state, action) => ({
    ...state,
    isModalAnimationStart: action.payload,
  }),
});
