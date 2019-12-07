import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
// import InputGroup from "../index";
import { InlineThumbNail, BlockThumbNail, RowThumbNail } from "../";
import theme from "../../theme";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <InlineThumbNail />
        <BlockThumbNail />
        <RowThumbNail />
      </ThemeProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
