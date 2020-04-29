import React from "react";
import { ThemeProvider } from "styled-components";
import Themes from "../themes";
import { GlobalStyles } from "./GlobalStyles";

const App = () => {
  console.log(Themes["dark"]);
  return (
    <ThemeProvider theme={Themes["dark"]}>
      <>
        <GlobalStyles />
        <div>
          <p>Hello World!</p>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
