import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    div{
        @media (max-width: 840px){
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
    }
`;

export default Container;
