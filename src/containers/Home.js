import React from "react";
import Styled, { ThemeProvider } from "styled-components";

import theme from "../components/theme";
import backgroundColor, { color } from "../components/color/mixins";
import Breadcrumb from "../components/breadcrumb";
import Header from "../components/header"
import Navbar from "../components/navbar";

let H1 = Styled.h1`
    ${backgroundColor}
    ${color}
`;

const App = () => (

  <ThemeProvider theme={theme}>
    <Header secondaryLight xSmall />
    <H1 primary successColor>
      Welcome
    </H1>
    <Button btnInverseDanger btnLarge>
      CLick
    </Button>
    <Button btnTransparentDanger btnLarge>
      CLick
    </Button>
    <Counter count={0}/>
    

    <Pagination />

  </ThemeProvider>
);

export default App;
