import Styled from "styled-components";
import backgroundColor, { color } from '../color/mixins';
export const Wrapper = Styled.div`
    ${backgroundColor}
    width:100%;
`
export const CatWrapper = Styled.div`
    height: 100%;
`
export const Links = Styled(Text)`
    padding:0.2rem;
    text-decoration:none;
    &:hover{
        ${color}
    }

`
export const ItemWrapper = Styled.div`
height:100%;
`