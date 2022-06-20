import { createReducer } from 'typesafe-actions';
import {
  getKakaoTokenSuccess,
  GET_KAKAO_TOKEN_SUCCESS,
  GET_NAVER_TOKEN_SUCCESS,
  saveAccessToken,
  saveUserInfo,
  SAVE_ACCESS_TOKEN,
  SAVE_ADDRESS,
  SAVE_USER_INFO,
} from './actions';
import { LoginResponse } from './types';

const initialState: LoginResponse = {
  accessToken: '',
  buildingCode: '',
  address: '',
  user_id: '',
};

export const loginState = createReducer<LoginResponse>(initialState, {
  [GET_KAKAO_TOKEN_SUCCESS]: (
    state,
    action: ReturnType<typeof getKakaoTokenSuccess>,
  ) => ({
    ...state,
    accessToken: action.payload.accessToken,
    user_id: action.payload.user_id,
    address: action.payload.address,
  }),
  [GET_NAVER_TOKEN_SUCCESS]: (state, action) => ({
    ...state,
    accessToken: action.payload.accessToken,
  }),

  [SAVE_ACCESS_TOKEN]: (state, action: ReturnType<typeof saveAccessToken>) => ({
    ...state,
    accessToken: action.payload.accessToken,
  }),

  [SAVE_USER_INFO]: (state, action: ReturnType<typeof saveUserInfo>) => ({
    ...state,
    address: action.payload.address,
    buildingCode: action.payload.buildingCode,
    user_id: action.payload.user_id,
  }),
  [SAVE_ADDRESS]: (state, action) => ({
    ...state,
    address: action.payload.address,
    user_id: action.payload.user_id,
  }),
});
