import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import SpoqaHanSansNeoBold from '../assets/fonts/SpoqaHanSansNeo-Bold.woff';
import SpoqaHanSansNeoRegular from '../assets/fonts/SpoqaHanSansNeo-Regular.woff';
import SpoqaHanSansNeoBold2 from '../assets/fonts/SpoqaHanSansNeo-Bold.woff2';
import SpoqaHanSansNeoRegular2 from '../assets/fonts/SpoqaHanSansNeo-Regular.woff2';

const globalStyle = css`
  ${reset}

  @font-face {
    font-family: 'SpoqaBold';
    src: local('Spoqa Han Sans Neo Bold'),
      url(${SpoqaHanSansNeoBold2}) format('woff2'),
      url(${SpoqaHanSansNeoBold}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Spoqa';
    src: local('Spoqa Han Sans Neo Regular'),
      url(${SpoqaHanSansNeoRegular2}) format('woff2'),
      url(${SpoqaHanSansNeoRegular}) format('woff');
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
