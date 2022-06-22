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
  buildingCode: string;
  user_id: string;
}
