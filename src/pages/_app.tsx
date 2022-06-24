import GlobalStyle from '../styles/GlobalStyle';
import { wrapper } from '../modules';
import Head from 'next/head';
import App, { AppContext } from 'next/app';
import { ApiService, axiosInstance, toLoginPage } from '../service/api';
import cookies from 'next-cookies';
import { createCustomHeader } from '../utils/createCustomHeader';
import palette from '../styles/palette';
import { AxiosError } from 'axios';

const app = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>내꺼도 같이 시켜줘</title>
        <link rel="icon" href="/assets/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

console.log(
  `
%c███╗   ██╗ █████╗ ███████╗ ██████╗  ██████╗ ███████╗ ██████╗ ██████╗  ██████╗ 
%c████╗  ██║██╔══██╗██╔════╝██╔════╝ ██╔════╝ ██╔════╝██╔═══██╗██╔══██╗██╔═══██╗
%c██╔██╗ ██║███████║█████╗  ██║  ███╗██║  ███╗█████╗  ██║   ██║██║  ██║██║   ██║
%c██║╚██╗██║██╔══██║██╔══╝  ██║   ██║██║   ██║██╔══╝  ██║   ██║██║  ██║██║   ██║
%c██║ ╚████║██║  ██║███████╗╚██████╔╝╚██████╔╝███████╗╚██████╔╝██████╔╝╚██████╔╝
%c╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝ ╚═════╝  ╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝  ╚═════╝`,
  `color:${palette.mainOrange}`,
  `color:${palette.lightOrange}`,
  `color:${palette.mainOrange}`,
  `color:${palette.lightOrange}`,
  `color:${palette.mainOrange}`,
);

app.getInitialProps = wrapper.getInitialAppProps(
  () => async (context: AppContext) => {
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

    axiosInstance.interceptors.response.use(
      async function (config) {
        try {
          return config;
        } catch (error) {
          console.log(error);
        }
      },
      async function (error: AxiosError) {
        if (error.response.status === 498) {
          try {
            const response = await ApiService.postApi('/refreshtoken', null);
            console.log(response, 'response');
          } catch (error) {
            if (error.response.status === 403) {
              // rt 만료
              toLoginPage();
            }
          }
        }
        return Promise.reject(error);
      },
    );

    return { ...myAppInitialProps };
  },
);

export default wrapper.withRedux(app);
