import axios from 'axios';
import React, { useEffect } from 'react';
import { ApiService } from '../../../../service/api';

const index = () => {
  useEffect(() => {
    (async () => {
      const res = await ApiService.getApi('/login/OAuth/kakao');
      console.log(res);
    })();
  }, []);

  return <div>카카오로그인</div>;
};

export default index;
