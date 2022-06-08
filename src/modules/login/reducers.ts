import { createReducer } from 'typesafe-actions';
import {
  getKakaoTokenSuccess,
  GET_KAKAO_TOKEN_SUCCESS,
  GET_NAVER_TOKEN_SUCCESS,
  saveAccessToken,
  saveRefreshToken,
  saveUserInfo,
  SAVE_ACCESS_TOKEN,
  SAVE_REFRESH_TOKEN,
  SAVE_USER_INFO,
} from './actions';
import { LoginResponse } from './types';

const initialState: LoginResponse = {
  accessToken: '',
  refreshToken: '',
  type: '',
  address: '',
  userId: '',
};

export const loginState = createReducer<LoginResponse>(initialState, {
  [GET_KAKAO_TOKEN_SUCCESS]: (
    state,
    action: ReturnType<typeof getKakaoTokenSuccess>,
  ) => ({
    ...state,
    accessToken: action.payload.accessToken,
    refreshToken: action.payload.refreshToken,
    type: action.payload.type,
    userId: action.payload.userId,
    address: action.payload.address,
  }),
  [GET_NAVER_TOKEN_SUCCESS]: (state, action) => ({
    ...state,
    accessToken: action.payload.accessToken,
    refreshToken: action.payload.refreshToken,
    type: action.payload.type,
  }),

  [SAVE_ACCESS_TOKEN]: (state, action: ReturnType<typeof saveAccessToken>) => ({
    ...state,
    accessToken: action.payload.accessToken,
  }),
  [SAVE_REFRESH_TOKEN]: (
    state,
    action: ReturnType<typeof saveRefreshToken>,
  ) => ({
    ...state,
    refreshToken: action.payload.refreshToken,
  }),
  [SAVE_USER_INFO]: (state, action: ReturnType<typeof saveUserInfo>) => ({
    ...state,
    address: action.payload.address,
    userId: action.payload.userId,
    type: action.payload.type,
  }),
});
