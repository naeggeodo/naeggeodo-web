import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const KaKaoInfo = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('eddy');
  }, []);

  return <div>123</div>;
};

export default KaKaoInfo;
