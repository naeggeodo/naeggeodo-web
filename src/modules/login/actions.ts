import { createAction } from 'typesafe-actions';

const namespace = 'login/';

// TOKEN actions
export const GET_KAKAO_TOKEN_REQUEST = namespace + 'GET_KAKAO_TOKEN_REQUEST';
export const GET_KAKAO_TOKEN_SUCCESS = namespace + 'GET_KAKAO_TOKEN_SUCCESS';
export const GET_KAKAO_TOKEN_FAIL = namespace + 'GET_KAKAO_TOKEN_FAIL';

export const START_LOADING = namespace + 'START_LOADING';
export const END_LOADING = namespace + 'END_LOADING';

export const OPEN_LOGIN_MODAL = namespace + 'OPEN_LOGIN_MODAL';
export const CLOSE_LOGIN_MODAL = namespace + 'CLOSE_LOGIN_MODAL';

export const getKakaoTokenRequest = createAction(
  GET_KAKAO_TOKEN_REQUEST,
  (kakaoCode) => kakaoCode,
)();

export const getKakaoTokenSuccess = createAction(
  GET_KAKAO_TOKEN_SUCCESS,
  (data) => data,
)();

export const startLoading = createAction(START_LOADING, () => ({}))();
export const endLoading = createAction(END_LOADING, () => ({}))();

export const openLoginModal = createAction(OPEN_LOGIN_MODAL, () => ({}))();
export const closeLoginModal = createAction(CLOSE_LOGIN_MODAL, () => ({}))();
