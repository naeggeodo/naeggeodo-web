import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getKakaoTokenRequest } from '../../../../modules/login/actions';
import { LoginService } from '../../../../service/api/login/LoginService';

const kakao = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const code = router.asPath.split('=')[1];

  useEffect(() => {
    (() => {
      dispatch(getKakaoTokenRequest(code));
    })();
  }, [dispatch]);

  return (
    <div
      style={{
        fontSize: '30px',
        fontFamily: 'SpoqaBold',
        textAlign: 'center',
      }}>
      카카오로그인
    </div>
  );
};

export default kakao;
