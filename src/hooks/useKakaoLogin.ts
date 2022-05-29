import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { getKakaoTokenRequest } from '../modules/login/actions';

export function useKakaoLogin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const code = useMemo(() => router.asPath.split('=')[1], [router]);
  const isLoading = useSelector(
    (state: RootState) => state.KakaoLoginState.isLoading,
  );

  useEffect(() => {
    (() => {
      dispatch(getKakaoTokenRequest(code));
    })();
  }, [dispatch]);

  return { router, isLoading };
}
