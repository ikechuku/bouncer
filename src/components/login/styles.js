import Styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../theme";



export const LoginContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:100vh;
    margin: 10px;
    @media screen and (max-width: 570px){
         .loginImageContainer{
             display: none;
         }
         .loginForm{
             width: 100% !important;
             margin: 0px 30px;
         }

    }
    .loginImageContainer{
        width: 60%;
        height: 90%;

        img{
            width:100%;
            height: 100%;
        }    
    }
    .loginForm{
        width: 40%;
        height: 80%;
         display: flex;
        justify-content: space-between;
        flex-direction: column;
        .header{
            display: flex;
            justify-content: space-between;
            flex-flow: wrap;
        }
        button{
            width: 100%;
            justify-content: center;
        }
    label{
        font-weight: bold;
    }

    }
    .footer{
        display:flex;
            justify-content: center;

        
    }
    .active{
        border-bottom: 3px ${theme.colors.dangerDark} solid;
    }
    
`;

export const Links = Styled(Link)`
    text-decoration:none;
    background:none;
    font-weight: bold;
    font-size: ${theme.fontsize.medium} 
    &:hover{
        color:${theme.colors.primary}
    }
    &:focus{
        color:${theme.colors.primaryDarker}
    }
`;
