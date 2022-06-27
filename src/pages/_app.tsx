import GlobalStyle from '../styles/GlobalStyle';
import { wrapper } from '../modules';
import Head from 'next/head';
import App, { AppContext } from 'next/app';
import { axiosInstance, removeTokens } from '../service/api';
import palette from '../styles/palette';
import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';
import { TOKEN_NAME } from '../constant/Login';
import Router from 'next/router';

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
  ╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝ ╚═════╝  ╚═════╝ ╚══════╝ ╚═════╝ ╚═════╝  ╚═════╝`,
  `color:${palette.DarkGray}`,
  `color:${palette.DarkGray}`,
  `color:${palette.DarkGray}`,
  `color:${palette.DarkGray}`,
  `color:${palette.DarkGray}`,
);

app.getInitialProps = wrapper.getInitialAppProps(
  () => async (context: AppContext) => {
    const myAppInitialProps = App.getInitialProps(context);

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
            const accessCookie = new Cookies();
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/refreshtoken`,
              null,
              {
                withCredentials: true,
              },
            );
            accessCookie.set(
              TOKEN_NAME.ACCESS_TOKEN,
              response.data.accessToken,
              {
                path: '/',
                maxAge: 60 * 60 * 24 * 2,
              },
            );
            Router.reload();
          } catch (error) {
            if (
              error.response &&
              error.response.status &&
              [403].includes(error.response.status)
            ) {
              window.alert(
                '토큰 유효기간이 종료되었습니다. 다시 로그인 해주세요.',
              );
              removeTokens();
              Router.replace('/login');
            }
          }
        } else if (
          error.response &&
          error.response.status &&
          [400, 401].includes(error.response.status)
        ) {
          removeTokens();
          alert('잘못된 요청입니다. 다시 로그인 해주세요.');
          window.location.replace('/login');
        } else if (error.response.status === 415) {
          alert('지원하지 않는 파일 형식입니다.');
        }
        return Promise.reject(error);
      },
    );

    return { ...myAppInitialProps };
  },
);

export default wrapper.withRedux(app);
