import Styled from 'styled-components'


const Container = Styled.div`
    width: 100%;
    div{
        @media (max-width: 640px){
            flex-wrap: wrap;
        }
    }
`

export default Container;