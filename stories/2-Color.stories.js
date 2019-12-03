import React from "react";
import Color from "../src/components/Colors/index";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export const primary = ()=>(
    <>
    <Color background="primaryLight" label="primary-light"  /><br/>
    <Color background="primary" label="primary"  /><br/>
    <Color background="primaryDark" label="primary-dark" /><br/>
    <Color background="primaryDarker" label="primary-darker" color="secondary" />
    </>

)
export const secondary = ()=>(
    <>
    <Color background="secondaryLighter" label="secondary-lighter" /><br/>
    <Color background="secondaryLight" label="secondary-light" /><br/>
    <Color background="secondary" label="secondary" /><br/>
    <Color background="secondaryDark" label="secondary-dark" /><br/>
    <Color background="secondaryDarker" label="secondary-darker" color="secondary" /><br/>
    </>)
export const warning = ()=>(
    <>
     <Color background="warning" label="warning" /><br/>
     <Color background="warningDark" label="warning-dark" /><br/>
     <Color background="warningDarker" label="warning-darker" /><br/>
     </>
     
     )
export const danger = ()=>(
    <>
     <Color background="danger" label="danger" /><br/>
     <Color background="dangerDark" label="danger-dark" /><br/>
     <Color background="dangerDarker" label="danger-darker" /><br/>
     </>
     )
export const success = ()=>(
    <>
     <Color background="success" label="success" /><br/>
     <Color background="successDark" label="success-dark" /><br/>
     <Color background="successDarker" label="success-darker" />
     </>)
export default {
    title:"color",
    decorators: [withKnobs]
}
