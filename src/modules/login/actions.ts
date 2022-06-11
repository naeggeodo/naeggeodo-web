import { createAction } from 'typesafe-actions';

const namespace = 'login/';

// TOKEN actions
export const GET_KAKAO_TOKEN_REQUEST = namespace + 'GET_KAKAO_TOKEN_REQUEST';
export const GET_KAKAO_TOKEN_SUCCESS = namespace + 'GET_KAKAO_TOKEN_SUCCESS';
export const GET_KAKAO_TOKEN_FAIL = namespace + 'GET_KAKAO_TOKEN_FAIL';

export const GET_NAVER_TOKEN_REQUEST = namespace + 'GET_NAVER_TOKEN_REQUEST';
export const GET_NAVER_TOKEN_SUCCESS = namespace + 'GET_NAVER_TOKEN_SUCCESS';
export const GET_NAVER_TOKEN_FAIL = namespace + 'GET_NAVER_TOKEN_FAIL';

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
  (naverCode) => naverCode,
)();

export const getNaverTokenSuccess = createAction(
  GET_NAVER_TOKEN_SUCCESS,
  (data) => data,
)();

export const SAVE_ACCESS_TOKEN = namespace + 'SAVE_ACCESS_TOKEN';
export const SAVE_REFRESH_TOKEN = namespace + 'SAVE_REFRESH_TOKEN';
export const SAVE_USER_INFO = namespace + 'SAVE_USER_INFO';
export const SAVE_ADDRESS = namespace + 'SAVE_ADDRESS';

export const saveAccessToken = createAction(
  SAVE_ACCESS_TOKEN,
  (accessToken) => ({ accessToken }),
)();

export const saveRefreshToken = createAction(
  SAVE_REFRESH_TOKEN,
  (refreshToken) => ({ refreshToken }),
)();

export const saveUserInfo = createAction(
  SAVE_USER_INFO,
  (address, buildingCode, user_id) => ({
    address,
    buildingCode,
    user_id,
  }),
)();

export const saveAddress = createAction(SAVE_ADDRESS, (data) => data)();
