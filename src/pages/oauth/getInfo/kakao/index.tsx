import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const KaKaoInfo = () => {
  const router = useRouter();

  useEffect(() => {
    console.log(router);
  }, []);
};

export default KaKaoInfo;
