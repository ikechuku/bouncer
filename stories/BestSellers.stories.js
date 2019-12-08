import React from "react";
// import { withKnobs, boolean, number, text } from "@storybook/addon-knobs";
import { withKnobs } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import BestSellers from "../src/components/bestseller";

export const bestSellers = () => {
         return (
           <ThemeProvider theme={theme}>
             <BestSellers />
           </ThemeProvider>
         );
       };



export default {
  title: "Bestseller",
  decorators: [withKnobs]
};
