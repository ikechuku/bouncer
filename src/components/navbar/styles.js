import Styled from 'styled-components'
import { Link} from 'react-router-dom'
import theme from '../theme'
export const Links = Styled(Link)`
    text-decoration:none;
    background:none;
    border:none
    padding:1rem;
    &:hover{
        color:${theme.colors.primaryDark}
    }
    &:focus{
        color:${theme.colors.primaryDark}
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
    },
    color:${theme.colors.primaryDark}  
}
`;
