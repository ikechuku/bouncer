import Styled from "styled-components";
import {fontSize,fontWeight,lineHeight,letterSpacing} from "./mixins"
import {color} from "../color/mixins"

const Text = Styled.p`
    ${fontSize}
    ${fontWeight}
    ${lineHeight}
    ${letterSpacing}
    ${color}
`;
  
export default Text;
