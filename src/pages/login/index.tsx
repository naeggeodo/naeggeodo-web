import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoginTemplate from '../../components/login/LoginTemplate';
import { TOKEN_NAME } from '../../constant/Login';

const login = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem(TOKEN_NAME.ACCESS_TOKEN)) {
      router.push('/');
    }
  }, [router]);

  return <LoginTemplate />;
};

export default login;
