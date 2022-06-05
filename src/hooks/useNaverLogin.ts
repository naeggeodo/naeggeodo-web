import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNaverTokenRequest } from '../modules/login/actions';

export function useNaverLogin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const code = router.asPath.split('=')[1];

  useEffect(() => {
    dispatch(getNaverTokenRequest(code.split('&state')[0]));
  }, [dispatch]);

  return { router, code };
}
