import React from "react";
import { ThemeProvider } from "styled-components";
import Themes from "../styles/themes/themes";
import Display from "./Display";
import { GlobalStyles } from "./GlobalStyles";

const App = () => {
  return (
    <ThemeProvider theme={Themes["dark"]}>
      <>
        <GlobalStyles />
        <Display />
      </>
    </ThemeProvider>
  );
};

export default App;
