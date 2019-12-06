import React from "react";
import Styled, { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import backgroundColor, { color } from "../components/color/mixins";
import Button from "../components/button";
import Counter from "../components/form/counter"
import Pagination from "../components/paginate";


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
