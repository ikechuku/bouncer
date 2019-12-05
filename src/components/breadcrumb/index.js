import React from 'react'
import Styled from 'styled-components'
import BackgroundColor, {color} from '../color/mixins'

const Crumb = Styled.div`
    ${BackgroundColor}
    ${color}
    width:100%;
    height:2.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
`

function Breadcrumb({children,...props}) {
    return(
    <Crumb {...props}>{children}</Crumb>
    );
}

export default Breadcrumb;