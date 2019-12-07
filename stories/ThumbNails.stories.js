import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import {
  BlockThumbNail,
  InlineThumbNail,
  RowThumbNail
} from "../src/components/thumbnails";


export const blockThumbNail = () => (
         <ThemeProvider theme={theme}>
           <BlockThumbNail />
         </ThemeProvider>
       );

export const rowThumbNail = () => (
         <ThemeProvider theme={theme}>
           <RowThumbNail />
         </ThemeProvider>
       );

export const inlineThumbNail = () => (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
           <InlineThumbNail />
        </BrowserRouter>
         </ThemeProvider>
       );


export default {
  title: "ThumbNails",
  decorators: [withKnobs]
};
