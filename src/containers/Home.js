import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../components/theme";
import Header from "../components/header";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import LandingPageCarousel from "../components/carousel";
import Advert from "../components/advert";
import BestSellers from "../components/bestseller";
import {
  ProductsTypes,
  Products
} from "../components/bestseller/assets/data/products";
import Banner from "../components/banner";
import Services from "../components/services";
import Subsection from "../components/subsection";
import Featured from "../components/featured";
import InputButton from "../components/form/inputButton";

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Header secondaryLight xSmall />
      <Navbar />
      <LandingPageCarousel />
      <div className="wrapper-2 position-2">
        <Advert />
        <BestSellers ProductsTypes={ProductsTypes} Products={Products} />
      </div>
      <div className="mt-12">
        <Banner />
      </div>
      <div className="wrapper-2 mt-11">
        <Services />
        <Subsection title="LATEST NEWS" />
        <div className="mt-11">
          <Featured title="FEATURED PRODUCTS" />
        </div>
      </div>
      <div className="wrapper-3 mt-11">
        <InputButton placeholder="Search query..." name="Search" />
      </div>
      <div className="mt-17">
        <Footer />
      </div>
    </div>
  </ThemeProvider>
);

export default App;

