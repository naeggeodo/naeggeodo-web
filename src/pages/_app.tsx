import GlobalStyle from '../styles/GlobalStyle';
import { wrapper } from '../modules';
import initMockApi from '../mocks';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  initMockApi();
}

const app = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(app);
