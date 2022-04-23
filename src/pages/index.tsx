import { useEffect } from 'react';
import MainTemplate from '../components/main/MainTemplate';

const Home: React.FC = () => {
  useEffect(() => {
    // if (router.asPath.startsWith('/#access_token')) {
    //   router.push('/');
    // }
  }, []);

  return <MainTemplate book />;
};

export default Home;
