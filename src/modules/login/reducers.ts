import { createReducer } from 'typesafe-actions';
import {
  END_LOADING,
  getKakaoTokenSuccess,
  GET_KAKAO_TOKEN_SUCCESS,
  GET_NAVER_TOKEN_SUCCESS,
  saveAccessToken,
  saveRefreshToken,
  saveUserInfo,
  SAVE_ACCESS_TOKEN,
  SAVE_REFRESH_TOKEN,
  SAVE_USER_INFO,
  START_LOADING,
} from './actions';
import { LoginResponse } from './types';

const initialState: LoginResponse = {
  accessToken: '',
  refreshToken: '',
  type: '',
  addr: '',
  userId: '',
  isLoading: false,
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
    addr: action.payload.addr,
  }),
  [GET_NAVER_TOKEN_SUCCESS]: (state, action) => ({
    ...state,
    accessToken: action.payload.accessToken,
    refreshToken: action.payload.refreshToken,
    type: action.payload.type,
  }),
  [START_LOADING]: (state, action) => ({
    ...state,
    isLoading: true,
  }),
  [END_LOADING]: (state, action) => ({
    ...state,
    isLoading: false,
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
    addr: action.payload.addr,
    userId: action.payload.userId,
    type: action.payload.type,
  }),
});
