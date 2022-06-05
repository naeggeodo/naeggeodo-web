import { createAction } from 'typesafe-actions';

const namespace = 'login/';

// TOKEN actions
export const GET_KAKAO_TOKEN_REQUEST = namespace + 'GET_KAKAO_TOKEN_REQUEST';
export const GET_KAKAO_TOKEN_SUCCESS = namespace + 'GET_KAKAO_TOKEN_SUCCESS';
export const GET_KAKAO_TOKEN_FAIL = namespace + 'GET_KAKAO_TOKEN_FAIL';

export const GET_NAVER_TOKEN_REQUEST = namespace + 'GET_NAVER_TOKEN_REQUEST';
export const GET_NAVER_TOKEN_SUCCESS = namespace + 'GET_NAVER_TOKEN_SUCCESS';
export const GET_NAVER_TOKEN_FAIL = namespace + 'GET_NAVER_TOKEN_FAIL';

export const START_LOADING = namespace + 'START_LOADING';
export const END_LOADING = namespace + 'END_LOADING';

export const getKakaoTokenRequest = createAction(
  GET_KAKAO_TOKEN_REQUEST,
  (kakaoCode) => kakaoCode,
)();

export const getKakaoTokenSuccess = createAction(
  GET_KAKAO_TOKEN_SUCCESS,
  (data) => data,
)();

export const getNaverTokenRequest = createAction(
  GET_NAVER_TOKEN_REQUEST,
  (kakaoCode) => kakaoCode,
)();

export const getNaverTokenSuccess = createAction(
  GET_NAVER_TOKEN_SUCCESS,
  (data) => data,
)();

export const startLoading = createAction(START_LOADING, () => ({}))();
export const endLoading = createAction(END_LOADING, () => ({}))();
