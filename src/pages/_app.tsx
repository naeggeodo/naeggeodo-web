import GlobalStyle from '../styles/GlobalStyle';
import { wrapper } from '../modules';
import Head from 'next/head';
import App, { AppContext } from 'next/app';
import { axiosInstance } from '../service/api';
import cookies from 'next-cookies';
import { createCustomHeader } from '../utils/createCustomHeader';

const app = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>내꺼도 같이 시켜줘</title>
        <link rel='icon' href='/assets/images/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

app.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (context: AppContext) => {
    const myAppInitialProps = App.getInitialProps(context);

    axiosInstance.interceptors.request.use(
      async function (config) {
        try {
          const allCookies = cookies(context.ctx);
          const accessToken = allCookies.accessToken;
          config.headers = createCustomHeader(accessToken);
          return config;
        } catch (error) {
          console.log(error);
        }
      },
      function (error) {
        return Promise.reject(error);
      },
    );

    return { ...myAppInitialProps };
  },
);

export default wrapper.withRedux(app);
