import { useEffect } from 'react';
import {
  getKakaoTokenRequest,
  getNaverTokenRequest,
} from '../../modules/login/actions';
import { useSelectLoginStates } from '../select/useSelectLoginStates';
import { useLoadLib } from '../utils/useLoadLib';

export function useAuth(loginProvider: 'kakao' | 'naver'): void {
  const { router, dispatch } = useLoadLib();
  const code = router?.asPath.split('=')[1];
  const { accessToken } = useSelectLoginStates();

  useEffect(() => {
    if (loginProvider === 'kakao') {
      dispatch(getKakaoTokenRequest(code));
    } else if (loginProvider === 'naver') {
      const parameter = code?.split('&state')[0];
      dispatch(getNaverTokenRequest(parameter));
    }
  }, [dispatch, router]);
}
