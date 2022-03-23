import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
// import SpoqaHanSansNeoBold from "../assets/fonts/SpoqaHanSansNeo-Bold.woff";
// import SpoqaHanSansNeoRegular from "../assets/fonts/SpoqaHanSansNeo-Regular.woff";
const globalStyle = css`
  @font-face {
    font-family: 'SpoqaHanSansNeobold';
    src: url('../assets/fonts/SpoqaHanSansNeoBold.woff') format('woff');
  }
  @font-face {
    font-family: 'SpoqaHanSansNeoregular';
    src: url('../assets/fonts/SpoqaHanSansNeoRegular.woff') format('woff');
  }
  ${reset}
  html {
    font-size: 10px;
  }
  * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle};
`;

export default GlobalStyle;
