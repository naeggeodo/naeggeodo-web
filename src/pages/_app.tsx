import GlobalStyle from '../styles/GlobalStyle';
import { wrapper } from '../modules';
import Head from 'next/head';
import App, { AppContext } from 'next/app';
import { ApiService, axiosInstance, removeTokens } from '../service/api';
import cookies from 'next-cookies';
import { createCustomHeader } from '../utils/createCustomHeader';
import palette from '../styles/palette';
import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';
import { TOKEN_NAME } from '../constant/Login';
import Router from 'next/router';
import { isTokenExpired } from '../utils/isTokenExpired';

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

          if (isTokenExpired(accessToken)) {
            console.log('토큰만료');
            const cookie = new Cookies();
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/refreshtoken`,
              null,
            );

            cookie.set('accessToken', response.data.accessToken, {
              path: '/',
              maxAge: 60 * 60 * 24 * 2,
            });

            config.headers = createCustomHeader(allCookies.accessToken);
            return config;
          } else {
            config.headers = createCustomHeader(accessToken);
            return config;
          }
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
        // if (error.response.status === 498) {
        //   try {
        //     const accessCookie = new Cookies();
        //     const response = await ApiService.postApi('/refreshtoken', null);
        //     accessCookie.set(
        //       TOKEN_NAME.ACCESS_TOKEN,
        //       response.data.accessToken,
        //       {
        //         path: '/',
        //         maxAge: 60 * 60 * 24 * 2,
        //       },
        //     );
        //   } catch (error) {
        //     if (error.response.status === 403) {
        //       // rt 만료
        //       removeTokens();
        //       Router.replace('/login');
        //     }
        //   }
        // }
        return Promise.reject(error);
      },
    );

    return { ...myAppInitialProps };
  },
);

export default wrapper.withRedux(app);
