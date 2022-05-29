import { createReducer } from 'typesafe-actions';
import {
  CLOSE_LOGIN_MODAL,
  END_LOADING,
  GET_KAKAO_TOKEN_SUCCESS,
  OPEN_LOGIN_MODAL,
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
  isClicked: false,
};

export const KakaoLoginState = createReducer<KakaoLoginResponse>(initialState, {
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
  [START_LOADING]: (state, action) => ({
    ...state,
    isLoading: true,
  }),
  [END_LOADING]: (state, action) => ({
    ...state,
    isLoading: false,
  }),
  [OPEN_LOGIN_MODAL]: (state, action) => ({
    ...state,
    isClicked: true,
  }),
  [CLOSE_LOGIN_MODAL]: (state, action) => ({
    ...state,
    isClicked: false,
  }),
});
