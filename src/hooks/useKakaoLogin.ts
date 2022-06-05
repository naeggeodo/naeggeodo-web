import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { getKakaoTokenRequest } from '../modules/login/actions';

export function useKakaoLogin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const code = router.asPath.split('=')[1];
  const isLoading = useSelector(
    (state: RootState) => state.kakaoLoginState.isLoading,
  );

  useEffect(() => {
    dispatch(getKakaoTokenRequest(code));
  }, [dispatch]);

  return { router, isLoading };
}