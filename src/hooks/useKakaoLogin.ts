import { useRouter } from 'next/router';

export function useKakaoLogin() {
  const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL;
  const CLIENT_SECRET = process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET;
  const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const router = useRouter();
  const getToken = async (code) => {
    // 백엔드로 code 전달하고 받아와서 클라이언트에 저장하는 코드
    if (code) {
      router.push('/');
    }
  };
  return { authUrl, getToken };
}
