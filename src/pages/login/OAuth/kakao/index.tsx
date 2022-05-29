import axios from 'axios';
import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ApiService } from '../../../../service/api';

const index = () => {
  const router = useRouter();
  const code = router.asPath.split('=')[1];

  useEffect(() => {
    (async () => {
      const res = await ApiService.postApi(`/login/OAuth/kakao`, { code });
      console.log(res);
    })();
  }, []);

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

export default index;
