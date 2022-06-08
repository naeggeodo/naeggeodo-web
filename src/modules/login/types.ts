import { getKakaoTokenRequest, getNaverTokenRequest } from './actions';

export type getkakaoTokenRequestAction = ReturnType<
  typeof getKakaoTokenRequest
>;

export type getNaverTokenRequestAction = ReturnType<
  typeof getNaverTokenRequest
>;

export interface LoginResponse {
  accessToken: string;
  address: string;
  refreshToken: string;
  type: 'Bearer' | string;
  userId: string;
}
