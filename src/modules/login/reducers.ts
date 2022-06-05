import { createReducer } from 'typesafe-actions';
import {
  END_LOADING,
  GET_KAKAO_TOKEN_SUCCESS,
  GET_NAVER_TOKEN_SUCCESS,
  START_LOADING,
} from './actions';
import { KakaoLoginResponse } from './types';

const initialState: KakaoLoginResponse = {
  accessToken: '',
  refreshToken: '',
  type: '',
  user: {
    address: '',
    id: '',
    authority: '',
  },
  isLoading: false,
};

export const kakaoLoginState = createReducer<KakaoLoginResponse>(initialState, {
  [GET_KAKAO_TOKEN_SUCCESS]: (state, action) => ({
    ...state,
    accessToken: action.payload.accessToken,
    refreshToken: action.payload.refreshToken,
    type: action.payload.type,
    user: {
      ...state.user,
      address: action.payload.user.address,
      id: action.payload.user.id,
      authority: action.payload.user.authority,
    },
  }),
  [GET_NAVER_TOKEN_SUCCESS]: (state, action) => ({
    ...state,
    accessToken: action.payload.accessToken,
    refreshToken: action.payload.refreshToken,
    type: action.payload.type,
    user: {
      ...state.user,
      address: action.payload.user.address,
      id: action.payload.user.id,
      authority: action.payload.user.authority,
    },
  }),
  [START_LOADING]: (state, action) => ({
    ...state,
    isLoading: true,
  }),
  [END_LOADING]: (state, action) => ({
    ...state,
    isLoading: false,
  }),
});
