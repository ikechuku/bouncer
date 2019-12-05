import React from 'react';
import { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import {Link} from 'react-router-dom'
import Breadcrumb from '../src/components/breadcrumb';
import { withKnobs } from '@storybook/addon-knobs';

export const primary = ()=>(
    <ThemeProvider theme={theme}>
        <Breadcrumb primaryLight secondaryLightColor>Home/product </Breadcrumb><br/>
        <Breadcrumb primary secondaryLightColor>Home/product </Breadcrumb><br/>
        <Breadcrumb primaryDark secondaryLightColor>Home/product </Breadcrumb><br/>
        <Breadcrumb primaryDarker secondaryLightColor>Home/product </Breadcrumb>
    </ThemeProvider>
)
export const danger = ()=>(
    <ThemeProvider theme={theme}>
        <Breadcrumb danger secondaryLightColor>Home/product</Breadcrumb><br/>
        <Breadcrumb dangerDark secondaryLightColor>Home/product</Breadcrumb><br/>
        <Breadcrumb dangerDarker secondaryLightColor>Home/product</Breadcrumb>
    </ThemeProvider>
)
export const secondary = ()=>(
    <ThemeProvider theme={theme}>
        <Breadcrumb secondary primaryColor>Home/product</Breadcrumb><br/>
        <Breadcrumb secondaryDark primaryColor>Home/product</Breadcrumb><br/>
        <Breadcrumb secondaryDarker secondaryLightColor>Home/product</Breadcrumb>
    </ThemeProvider>
)
export const warning = ()=>(
    <ThemeProvider theme={theme}>
        <Breadcrumb warning >Home/product</Breadcrumb><br/>
        <Breadcrumb warningDark >Home/product</Breadcrumb><br/>
        <Breadcrumb warningDarker >Home/product</Breadcrumb>
    </ThemeProvider>
)
export const success = ()=>(
    <ThemeProvider theme={theme}>
        <Breadcrumb success >Home/product</Breadcrumb><br/>
        <Breadcrumb successDark >Home/product</Breadcrumb><br/>
        <Breadcrumb successDarker >Home/product</Breadcrumb>
    </ThemeProvider>
)
export default {
    title: "Breadcrumb",
    decorators: [withKnobs]
  };
  