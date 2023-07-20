import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: url('assets/background-stars.svg');
    background-size: cover;
    background-color: #11112B;
    color: #fff;
    min-height: 100vh;
    font-family: 'Antonio', sans-serif;
  }
`;

export default GlobalStyle;
