//imports all color constants from color file
// import * as colors from "./color"

import Styled from "styled-components"
import React from 'react'
import backgroundColor,{color} from "./mixins"

let Defin = Styled.div`
    width:"30px";
    ${backgroundColor}
`;
/**
 * This component renders color guide for the application 
 * @param {string} background This is the background color of the component
 * @param {string} label This is the description of the component
 * @param {string} color This determines the text color of the component
 */

let Color = ({label,...props})=>{
    
   return (
        <>
        <Defin  {...props}>{label}</Defin>
        </>

)}

export default Color;