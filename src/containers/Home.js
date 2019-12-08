import React from "react";
import Styled, { ThemeProvider } from "styled-components";

import theme from "../components/theme";
import backgroundColor, { color } from "../components/color/mixins";
import Breadcrumb from "../components/breadcrumb";
import Header from "../components/header"
import Navbar from "../components/navbar";
import SortFilter from "../components/sort-filter";

let H1 = Styled.h1`
    ${backgroundColor}
    ${color}
`;

const App = () => (

  <ThemeProvider theme={theme}>
    <Header secondaryLight xSmall />
    <Navbar/> 
    <H1 primary successColor>
      Welcome
    </H1>
    <Breadcrumb secondary primaryColor>Home/index</Breadcrumb>
    <SortFilter />
  </ThemeProvider>
);

export default App;
