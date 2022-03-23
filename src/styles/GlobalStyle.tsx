import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';
const globalStyle = css`
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
