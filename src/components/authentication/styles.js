import Styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../theme";

export const LoginContainer = Styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    @media screen and (max-width: 900px){
         .loginImageContainer{
             display: none;
         }
         .loginForm{
             width: 80% !important;
             margin: 20px 30px;
         }

    }
    
    .loginImageContainer{
        width: 55%;
        height: 90%;

        img{
            width:100%;
            height: 100%;


        }    
    }
    .loginForm{
        width: 500px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: bottom;
        .header{
            top: 100px;
            display: flex;
            justify-content: space-between;
            
        }
        button{
            width: 100%;
            justify-content: center;
            margin: 2rem 0;
        }
        label{
            margin-top: 1.5rem;
            font-weight: bold;
        }
    .boldLink{
      font-size: ${theme.fontsize.small};
      font-weight: bold;
    

    }
    }
    
    .footer{
        display:flex;
        justify-content: space-between;

        
    }
    .active{
        border-bottom: 3px ${theme.colors.dangerDark} solid;
    }
    
`;

export const Navigation = Styled(NavLink)`
    text-decoration:none;
    background:none;
    &:hover{
        color:${theme.colors.dangerDark}
    }
    &:focus{
        color:${theme.colors.primaryDarker}
    }
`;

export const Logo = Styled.div`
   display: flex;
   align-items:center;
   height: 8vh;
   margin-left: 5rem;
   
`;
export const Wrapper = Styled.div`
  
   color:${theme.colors.dangerDark}
   
`;
