import { getKakaoTokenRequest } from './actions';

export type getkakaoTokenRequestAction = ReturnType<
  typeof getKakaoTokenRequest
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
