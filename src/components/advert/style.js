import Styled from "styled-components";


const AdvertWrapper = Styled.div`

    .mex{
        display: flex;
        overflow-x: scroll;  
    }
    .advert {
        max-height: 17.5rem;
        max-width: 24.375rem;
        img{
            width:100%;
            height:auto;
        }      
    }

    @media screen and (max-width: 769px) {
        .advert {
            min-height: 8rem;
            min-width: 12rem;
        img{
            height: 8rem;
        }
    }
    }
`;


export default AdvertWrapper;
