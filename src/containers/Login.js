import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../components/theme";
import Navbar from "../components/navbar";
import SignIn from "../components/login";


const Login = () => (
  <ThemeProvider theme={theme}>
        <Navbar />
        <SignIn />
  </ThemeProvider>
);

export default Login;

