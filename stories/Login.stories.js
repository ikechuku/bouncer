import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import theme from "../src/components/theme";

import Login from "../src/containers/Login";

export const login = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default {
  title: "Login",
  decorators: [withKnobs]
};
