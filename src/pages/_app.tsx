import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { wrapper } from '../modules';
import initMockApi from '../mocks';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  initMockApi();
}

const app = ({ Component, pageProps }: AppProps) => {
  console.log(process.env.NEXT_PUBLIC_API_MOCKING);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(app);
