import { createReducer } from 'typesafe-actions';
import { GET_USER_INFO_IN_MYPAGE_SUCCESS } from './actions';

import { MyPageUserInfoResponse } from './types';

interface MyPageState {
  userInfo: MyPageUserInfoResponse;
}

const initialState: MyPageState = {
  userInfo: {
    nickname: '',
    myOrdersCount: null,
    participatingChatCount: null,
  },
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
});
