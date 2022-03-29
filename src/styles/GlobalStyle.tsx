import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
import SpoqaHanSansNeoBold from '../assets/fonts/SpoqaHanSansNeo-Bold.woff';
import SpoqaHanSansNeoRegular from '../assets/fonts/SpoqaHanSansNeo-Regular.woff';

const globalStyle = css`
  ${reset}

  @font-face {
    font-family: 'SpoqaBold';
    src: local(${SpoqaHanSansNeoBold}) format('woff');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Spoqa';
    font-display: fallback;
    src: local(${SpoqaHanSansNeoRegular}) format('woff');
  }

  html {
    font-size: 10px;
  }
  body {
    font-family: 'Spoqa';
  }
  * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle};
`;

export default GlobalStyle;
