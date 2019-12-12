import React from "react";
import Subsection from "../src/components/subsection/index";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";

export const subsection = () => (
  <ThemeProvider theme={theme}>
   <Subsection title="FEATURED PRODUCTS"/>
  </ThemeProvider>
);

export default {
  title: "Subsection",
  decorators: [withKnobs]
};