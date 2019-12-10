import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import SignIn from "../";
import theme from "../../theme";

it("renders correctly when component is called", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
