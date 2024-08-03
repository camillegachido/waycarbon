import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(0, 0, 0, 1);
    background-color: rgba(255, 255, 255, 1);

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, html, * {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

`;
