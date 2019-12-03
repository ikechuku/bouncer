//imports all color constants from color file
import * as colors from "./color"

import Styled from "styled-components"
import React from 'react'
/**
 * This function generates color and background css from props to be used by styled component
 * @param {string} background  Defines background color for styled component
 * @param {string} color Defines text color to be created
 * @returns CSS definition of background and color
 */
let cols = ({background, color})=>{
    return(
    `
    color:${colors[color]}
    background-color:${colors[background]}
    `
)}

let Defin = Styled.div`
    width:"30px";
    ${cols};
`;
/**
 * This component renders color guide for the application 
 * @param {string} background This is the background color of the component
 * @param {string} label This is the description of the component
 * @param {string} color This determines the text color of the component
 */
let Color = ({background,label, color})=>(
<>
    <Defin color={color} background={background}>{label}</Defin>
</>

)

export default Color;