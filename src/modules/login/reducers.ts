import { createReducer } from 'typesafe-actions';
import { GET_KAKAO_TOKEN_SUCCESS } from './actions';
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
});
