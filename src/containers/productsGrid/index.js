import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../components/theme";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Breadcrumb from "../../components/breadcrumb";
import { Link } from "./style";
import SectionWapper from "./style";
import Layout from "../../components/product-layout";
import Accesories from "../../components/accesories";
import Brand from "../../components/brand";
import Prices from "../../components/prices";
import ColorDiv from "../../components/productColor";
import items from "../../components/product-layout/items"
const ProductsGrid = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header secondaryLight xSmall />
        <Navbar />
        <Breadcrumb secondaryLighter>
          <Link xSmall bold primaryLightColor as="a" href="#">
            Home
          </Link>
          <Link xSmall bold secondaryDarkColor as="a" href="#">
            /
          </Link>
          <Link xSmall bold primaryLightColor as="a" href="#">
            Accesories
          </Link>
          <Link xSmall bold secondaryDarkColor as="a" href="#">
            /
          </Link>
          <Link xSmall bold as="a" href="#">
            Beat Solo2 on Ear Headphones - Black
          </Link>
        </Breadcrumb>
        <SectionWapper>
          <div className="containerx">
            <div className="side-sect">

              <div className="filter-category">
                <Accesories />
              </div>
              <div className="filter-category">
                <Prices />
              </div>
              <div className="filter-category">
                <ColorDiv />
              </div>
              <div className="filter-category">
                <Brand />
              </div>
            </div>
            <div className="main-sect">
              <div className="banner">
                <img src="https://res.cloudinary.com/decagonbouncer/image/upload/v1578926954/banner_oczls9.webp" />
                <div class="shop_now"></div>
              </div>
              
              <div className="layout-container">
                <Layout items={items} />
              </div>
            </div>
          </div>
        </SectionWapper>
        <div className="mt-17">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ProductsGrid;
