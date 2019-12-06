import Styled from 'styled-components'
import { color } from '../color/mixins'
import { fontSize, fontWeight } from '../text/mixins'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'

export const HR = Styled.hr`
${color}
`
export const Text = Styled.p`
${fontSize}
${color}
${fontWeight}
`

export const Wrapper1 = Styled.div`
    width:100%;
`
export const P = Styled(Text)`
    width:80%;
    text-decoration:none;
`
export const Social = Styled.div`
    
`
export const Facebook = Styled(FaFacebookF)`
    ${color}
    margin-right:1.5rem;
`
export const Twitter = Styled(FaTwitter)`
    ${color}
    margin-right:1.5rem;


`
export const Img = Styled.img`
    padding-left:1rem;
`
export const Logo = Styled.img`
    max-width:190.8px;
    height:auto;
    width:100%;
    margin:14px 0 14px 0;
`