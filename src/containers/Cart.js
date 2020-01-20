import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb";

import CartComponent from "../components/cart";

const Cart = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Header secondaryLight xSmall />
      <Navbar />
      <Breadcrumb secondary>
        <Link small as="a" href="#">
          Home
        </Link>
        <Link secondaryDarkColor medium>
          /
        </Link>
        <Link small as="a" href="#">
          Product
        </Link>
        <Link secondaryDarkColor medium>
          /
        </Link>
        <Link xSmall>Headphones</Link>
      </Breadcrumb>
      <CartComponent />
      <Footer />
    </div>
  </ThemeProvider>
);

export default Cart;
