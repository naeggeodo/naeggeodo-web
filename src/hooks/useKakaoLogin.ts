import { useEffect } from 'react';
import { getKakaoTokenRequest } from '../modules/login/actions';
import { useLoadLib } from './utils/useLoadLib';

export function useKakaoLogin() {
  const { dispatch, router } = useLoadLib();
  const code = router.asPath.split('=')[1];

  useEffect(() => {
    dispatch(getKakaoTokenRequest(code));
  }, [dispatch, router]);

  return { router };
}
