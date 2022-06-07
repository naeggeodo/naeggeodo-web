import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoginTemplate from '../../components/login/LoginTemplate';
import { TOKEN_NAME } from '../../constant/Login';

const login = () => {
  return <LoginTemplate />;
};

export default login;
