import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
