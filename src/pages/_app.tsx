import GlobalStyle from '../styles/GlobalStyle';
import { wrapper } from '../modules';

const app = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(app);
