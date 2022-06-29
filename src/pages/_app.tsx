import GlobalStyle from "../styles/GlobalStyle";
import { wrapper } from "../modules";
import Head from "next/head";
import App, { AppContext } from "next/app";
import palette from "../styles/palette";

const app = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>내꺼도 같이 시켜줘</title>
        <link rel="icon" href="/assets/images/favicon.ico" />
        <meta
          name="viewport"
          content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
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
  `color:${palette.DarkGray}`,
  `color:${palette.DarkGray}`,
  `color:${palette.DarkGray}`,
  `color:${palette.DarkGray}`,
  `color:${palette.DarkGray}`
);

app.getInitialProps = wrapper.getInitialAppProps(
  () => async (context: AppContext) => {
    const myAppInitialProps = App.getInitialProps(context);

    return { ...myAppInitialProps };
  }
);

export default wrapper.withRedux(app);
