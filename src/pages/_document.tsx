import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css'
            rel='stylesheet'
            type='text/css'
          />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
