import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    /* width: 360px; */
    /* height: 360px; */
    width: 100%;
    height: 100%;
  }

  #root {
    background-color: blue !important;
    color: #fff !important;

    width: 100%;
    height: 100%;
  }

  body {
    background-color: red;
    color: #000;

    font: 24px 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    font: 24px 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }
`;