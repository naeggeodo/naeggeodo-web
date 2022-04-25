import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = css`
  ${reset}

  @font-face {
    font-family: 'SpoqaBold';
    src: local('Spoqa Han Sans Neo Bold'),
      url('/assets/fonts/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
      url('/assets/fonts/SpoqaHanSansNeo-Bold.woff') format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Spoqa';
    src: local('Spoqa Han Sans Neo Regular'),
      url('/assets/fonts/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
      url('/assets/fonts/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-display: fallback;
  }

  body {
    font-family: 'Spoqa', 'sans-serif';
  }
  * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle};
`;

export default GlobalStyle;
