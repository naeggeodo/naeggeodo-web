import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { ApiService } from '../../../../service/api';

const index = () => {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const code = router.asPath;
      const res = await ApiService.getApi(`${code}`);
      console.log(res);
    })();
  }, []);

  return <div>카카오로그인</div>;
};

export default index;
