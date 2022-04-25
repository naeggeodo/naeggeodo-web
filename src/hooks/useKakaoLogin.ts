import { useRouter } from 'next/router';
import { KakaoClient } from '../constant/Login';
export function useKakaoLogin() {
  const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KakaoClient.kakaoRestApiKey}&redirect_uri=${KakaoClient.kakaoRedirectUrl}&response_type=code`;
  const router = useRouter();
  const getToken = async (code) => {
    // 백엔드로 code 전달하고 받아와서 클라이언트에 저장하는 코드
    if (code) {
      router.push('/');
    }
  };
  return { authUrl, getToken };
}
