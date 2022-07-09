import GlobalStyle from '../styles/GlobalStyle';
import { wrapper } from '../modules';
import Head from 'next/head';
import App, { AppContext } from 'next/app';
import palette from '../styles/palette';

const app = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>내꺼도 시켜줘</title>
        <link rel="icon" href="/assets/images/favicon.ico" />
        <link rel="shortcut icon" href="/assets/images/favicon.ico"></link>
        <meta
          name="viewport"
          content="initial-scale=1.0,maximum-scale=5,width=device-width"
        />
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
  `color:${palette.mainOrange}`,
  `color:${palette.mainOrange}`,
  `color:${palette.mainOrange}`,
  `color:${palette.mainOrange}`,
  `color:${palette.mainOrange}`,
);

app.getInitialProps = wrapper.getInitialAppProps(
  () => async (context: AppContext) => {
    const myAppInitialProps = App.getInitialProps(context);

    return { ...myAppInitialProps };
  },
);

export default wrapper.withRedux(app);
