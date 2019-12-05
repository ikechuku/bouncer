import Styled from "styled-components";
import {fontSize,fontWeight,lineHeight,letterSpacing} from "./mixins"
import {color} from "../color/mixins"

const Text = Styled.p`
    ${fontSize}
    ${fontWeight}
    ${lineHeight}
    ${letterSpacing}
    ${color}
    font-family: 'Open Sans', sans-serif;
`;
  
export default Text;
