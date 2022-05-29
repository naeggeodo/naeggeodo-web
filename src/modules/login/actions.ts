import { createAction } from 'typesafe-actions';

const namespace = 'login/';

// TOKEN actions
export const GET_KAKAO_TOKEN_REQUEST = namespace + 'GET_KAKAO_TOKEN_REQUEST';
export const GET_KAKAO_TOKEN_SUCCESS = namespace + 'GET_KAKAO_TOKEN_SUCCESS';
export const GET_KAKAO_TOKEN_FAIL = namespace + 'GET_KAKAO_TOKEN_FAIL';

export const getKakaoTokenRequest = createAction(
  GET_KAKAO_TOKEN_REQUEST,
  (kakaoCode) => ({ kakaoCode }),
)();

export const getKakaoTokenSuccess = createAction(
  GET_KAKAO_TOKEN_SUCCESS,
  (data) => data,
)();
