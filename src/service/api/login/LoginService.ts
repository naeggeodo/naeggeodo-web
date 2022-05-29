import { ApiService } from '..';

export class LoginService {
  static async asyncGetKakaoToken(code: string) {
    return await ApiService.postApi(`/login/OAuth/kakao`, { code });
  }
}
