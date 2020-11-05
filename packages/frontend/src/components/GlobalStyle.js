import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-family: -apple-system, system-ui;
  }

  @media all and (display-mode: standalone) {
    html {
      height: 100vh;
    }
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.background.default};
  }

  #app-root {
    display: flex;
    height: 100vh;
    flex-direction: column;
    color: ${({ theme }) => theme.text.primary};
    background: ${({ theme }) => theme.overlay};
    
    /* iPhone X */
    padding-right: env(safe-area-inset-right);
    padding-left: env(safe-area-inset-left);
  }

  #modal-root {
    height: 90vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    pointer-events: none;

    * {
      pointer-events: all;
    }
  }

  /* Migt not do anything */
  /* main {
    overflow: auto;
  } */
`;

export default GlobalStyle;
