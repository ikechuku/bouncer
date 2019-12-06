import React, { useState } from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import ButtonDom from "../src/components/button";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Text from "../src/components/text";

export const buttonPrimary = () => (
  <ThemeProvider theme={theme}>
    <ButtonDom
      btnprimary
      btnSmall
      disabled={boolean(false)}
      onClick={({ target }) => action("button primary")(target)}
    >
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnTransparentPrimary btnSmall>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnInversePrimary btnSmall>
      Click
    </ButtonDom>
    <br />
    <br />
    <ButtonDom btnprimary btnLarge>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnTransparentPrimary btnLarge>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnInversePrimary btnLarge>
      Click
    </ButtonDom>
  </ThemeProvider>
);

export const buttonDanger = () => (
  <ThemeProvider theme={theme}>
    <ButtonDom btndanger btnSmall>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnTransparentDanger btnSmall>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnInverseDanger btnSmall>
      Click
    </ButtonDom>
    <br />
    <br />
    <ButtonDom btndanger btnLarge>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnTransparentDanger btnLarge>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnInverseDanger btnLarge>
      Click
    </ButtonDom>
  </ThemeProvider>
);

export const buttonSuccess = () => (
  <ThemeProvider theme={theme}>
    <ButtonDom btnsuccess btnSmall>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnTransparentSuccess btnSmall>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnInverseSuccess btnSmall>
      Click
    </ButtonDom>
    <br />
    <br />
    <ButtonDom btnsuccess btnLarge>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnTransparentSuccess btnLarge>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnInverseSuccess btnLarge>
      Click
    </ButtonDom>
  </ThemeProvider>
);

export const buttonWarning = () => (
  <ThemeProvider theme={theme}>
    <ButtonDom btnwarning btnSmall>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnTransparentWarning btnSmall>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnInverseWarning btnSmall>
      Click
    </ButtonDom>
    <br />
    <br />
    <ButtonDom btnwarning btnLarge>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnTransparentWarning btnLarge>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnInverseWarning btnLarge>
      Click
    </ButtonDom>
  </ThemeProvider>
);

export const buttonDark = () => (
  <ThemeProvider theme={theme}>
    <ButtonDom btndark btnSmall>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnTransparentDark btnSmall>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnInverseDark btnSmall>
      Click
    </ButtonDom>
    <br />
    <br />
    <ButtonDom btndark btnLarge>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnTransparentDark btnLarge>
      Click
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnInverseDark btnLarge>
      Click
    </ButtonDom>
  </ThemeProvider>
);

export const buttonIcons = () => (
  <ThemeProvider theme={theme}>
    <ButtonDom btnInversePrimary btnTiny>
      <FaRegHeart />
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnInversePrimary btnTiny>
      <FiShoppingCart />
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnInversePrimary btnLarge>
      <FiShoppingCart /> &nbsp; &nbsp; Add to Cart
    </ButtonDom>
    &nbsp; &nbsp; &nbsp;
    <ButtonDom btnInversePrimary btnLarge>
      <FaRegHeart /> &nbsp; &nbsp; Add to Favorites
    </ButtonDom>
  </ThemeProvider>
);

export default {
  title: "Button",
  decorators: [withKnobs]
};
