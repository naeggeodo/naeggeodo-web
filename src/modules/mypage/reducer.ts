import { createReducer } from 'typesafe-actions';

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

export const myPageState = createReducer<MyPageState>(initialState, {});
