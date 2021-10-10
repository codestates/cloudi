import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 7px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: rgba(15, 117, 1, 0.5);
    };
    @media screen and (max-width: 1023px) {
      ::-webkit-scrollbar {
        display: none;
      };
    };

  }
  body {
    font-family: 'Gowun Batang', serif;
  };
`;

export default GlobalStyle;
