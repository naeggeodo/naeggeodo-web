import axios from "axios";
import { CsrApiService } from "..";

// ! 로그인 페이지에서는 공통으로 사용하는 axiosInstance를 사용하지 않습니다.

export class LoginService {
  static async asyncGetKakaoToken(code: string) {
    return await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/login/OAuth/kakao`,
      { code }
    );
  }
  static async asyncGetNaverToken(code: string) {
    return await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/login/OAuth/naver`,
      { code },
      { withCredentials: true }
    );
  }
  static async asyncPostLogout() {
    return await CsrApiService.postApi(
      `${process.env.NEXT_PUBLIC_API_URL}/logout`,
      null
    );
  }
}
