import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import CounterGroup from "../src/components/form/counter";

export const counter = () => (
  <ThemeProvider theme={theme}>
   <CounterGroup primaryLigthColor />
  </ThemeProvider>
);

export default {
  title: "Counter",
  decorators: [withKnobs]
};