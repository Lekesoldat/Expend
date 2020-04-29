import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    /* margin: 0; */
    min-height: 100vh;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    background: ${(props) => props.theme.background.default};
    color: ${(props) => props.theme.text.primary};

    /* iPhone X */
    padding-top: env(safe-area-inset-top);
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
  }
`;
