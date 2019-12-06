import Styled from 'styled-components'
import { color } from '../color/mixins'
import { Link} from 'react-router-dom'
export const Links = Styled(Link)`
    /* ${color} */
    text-decoration:none;
    padding:1rem;
    &:hover{
        ${color};
    }
    &:focus{
        ${color};
    }
`

export const StoreDropdown = Styled.div`
    position:absolute;
    top:20px;
    visibility: hidden;
    opacity: 0;
    transition: 300ms ease-in-out;
    left:-15rem;
`

export const Store = Styled.li`
position:relative;
list-style:none;
&:hover{
    ${StoreDropdown}{
        visibility:visible;
        opacity:1;
    }
}
`;
