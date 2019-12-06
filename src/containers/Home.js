import React from "react";
import Styled, { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import backgroundColor, { color } from "../components/color/mixins";

let H1 = Styled.h1`
    ${backgroundColor}
    ${color}
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <br />
    <H1 danger successColor>
      Welcome
    </H1>
  </ThemeProvider>
);

export default App;
