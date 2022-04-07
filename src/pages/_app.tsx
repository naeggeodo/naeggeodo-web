import { AppProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { wrapper } from '../modules';

const app = ({ Component, pageProps }: AppProps) => {
  if (process.env.ENV_LOCAL_VARIABLE) {
    (async () => {
      const { server } = await import('../mocks/server.ts');
      console.log('server open 🔥');
      server.listen();
    })();
  } else {
    (async () => {
      const { worker } = await import('../mocks/browser.ts');
      console.log('browser open ✨');
      worker.start();
    })();
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(app);
