import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MainTemplate from '../components/main/MainTemplate';

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // if (router.asPath.startsWith('/#access_token')) {
    //   router.push('/');
    // }
  }, []);

  return <MainTemplate book />;
};

export default Home;
