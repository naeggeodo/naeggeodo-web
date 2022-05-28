import { RenderPageResult } from 'next/dist/shared/lib/utils';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>내꺼도</title>
          <meta charSet='UTF-8' />
          <meta property='og:title' content='내꺼 배달비 반띵하러 가기 🛵' />
          <meta name='Keywords' content='내꺼도' />
          <meta httpEquiv='X-UA-Compatible' content='IE-edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />

          <meta
            name='Description'
            content='우리동네 배달비 반띵 어플리케이션 내꺼도 입니다.'
          />

          <meta
            property='og:description'
            content='우리동네 배달비 반띵 어플리케이션<br/>지금 나와 같은 음식을 떠올리고 있는 사람과 대화해보세요!'
          />
          <meta
            property='og:url'
            content='http://www.naeggeodo.com:8080/create'
          />
          <meta
            property='og:image'
            content='/public/assets/images/hamburger.svg'
          />
        </Head>
        <body>
          <div id='webviewPortal'></div>
          <div id='loginPortal'></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
