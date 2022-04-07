import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { wrapper } from '../modules';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(app);
