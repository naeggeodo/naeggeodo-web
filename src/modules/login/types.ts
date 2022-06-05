import { getKakaoTokenRequest, getNaverTokenRequest } from './actions';

export type getkakaoTokenRequestAction = ReturnType<
  typeof getKakaoTokenRequest
>;

export type getNaverTokenRequestAction = ReturnType<
  typeof getNaverTokenRequest
>;

interface UserInfo {
  address: string;
  authority: 'MEMBER' | string;
  id: string;
}

export interface KakaoLoginResponse {
  accessToken: string;
  refreshToken: string;
  type: 'Bearer' | string;
  user: UserInfo;
  isLoading: boolean;
}

export interface NaverLoginResponse {
  accessToken: string;
  refreshToken: string;
  type: 'Bearer' | string;
  user: UserInfo;
}
