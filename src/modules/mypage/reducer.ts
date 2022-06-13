import { createReducer } from 'typesafe-actions';
import {
  GET_USER_INFO_IN_MYPAGE_SUCCESS,
  SET_REPORT_CONFIRM_MODAL,
  SET_REPORT_MODAL,
} from './actions';

import { MyPageUserInfoResponse } from './types';

interface MyPageState {
  userInfo: MyPageUserInfoResponse;
  reportModal: string;
  reportConfirmModal: string;
}

const initialState: MyPageState = {
  userInfo: {
    nickname: '',
    myOrdersCount: null,
    participatingChatCount: null,
  },
  reportModal: '',
  reportConfirmModal: '',
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
});
