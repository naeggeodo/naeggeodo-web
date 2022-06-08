import { useEffect } from 'react';
import { getNaverTokenRequest } from '../modules/login/actions';
import { useLoadLib } from './useLoadLib';

export function useNaverLogin() {
  const { dispatch, router } = useLoadLib();
  const code = router.asPath.split('=')[1];

  useEffect(() => {
    dispatch(getNaverTokenRequest(code.split('&state')[0]));
  }, [dispatch]);

  return { router, code };
}
