import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import UserAuth from "../components/authentication/Auth";
import Nav from "../components/authentication/AuthenticationNav";

const Auth = () => (
  <ThemeProvider theme={theme}>
    <Nav />
    <UserAuth />
  </ThemeProvider>
);

export default Auth;
