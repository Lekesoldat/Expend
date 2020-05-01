import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  @media all and (display-mode: standalone) {
    html {
      height: 100vh;
    }
  }

  body {
    display: flex;
    margin: 0;
    height: 100%;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    background: ${(props) => props.theme.background.default};
    color: ${(props) => props.theme.text.primary};
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
    
    /* iPhone X */
    padding-right: env(safe-area-inset-right);
    padding-left: env(safe-area-inset-left);
  }

  main {
    overflow: auto;
  }
`;
