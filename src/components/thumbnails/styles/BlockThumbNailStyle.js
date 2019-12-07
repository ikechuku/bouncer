import styled from "styled-components";

export const CardWrapperDIV = styled.div`
         display: flex;
         flex-direction: column;
         width: 16.875rem;
         justify-content: space-around;
         align-items: center;
         height: 349px;
         margin-bottom: 1.875rem;
         position: relative;
         border: solid 3px #f6f7f8;
         & .imageContainer {
           width: 14.75rem;
           height: 153px;
           img {
             width: 100%;
             height: 100%;
           }
         }
         & .iconContainer {
           width: 15rem;
           height: 183px;
           display: ${({ show }) => show};
           justify-content: center;
           align-items: center;
           cursor: pointer;
           opacity: 0.95;
           background-color: #fafafb;
           position: absolute;
           top: 2px;
           & .heart {
             margin-left: 10px;
           }
         }
         & .iconWrapper {
           width: 2.1rem;
           height: 33.6px;
           display: flex;
           cursor: pointer;
           align-items: center;
           justify-content: center;
           border: solid 2px rgba(51, 160, 255, 0.25);
           border-radius: 50%;
           -webkit-border-radius: 50%;
           -moz-border-radius: 50%;
           -ms-border-radius: 50%;
           -o-border-radius: 50%;
         }
         & .stockName {
           width: 10.125rem;
         }
         & .product_price {
           font-size: 16px;
           line-height: 1.05;
           letter-spacing: 0.4px;
           text-align: center;
           color: #ff4858;
         }
         & .product_old_price {
           font-size: 16px;
           text-decoration: line-through;
           line-height: 1.05;
           letter-spacing: 0.4px;
           text-align: center;
           color: #c1c8ce;
         }
         & .flex_div {
           display: flex;

           justify-content: space-evenly;
         }
       `;


export const HotWrapper = styled.div`
  width: 40px;
  text-align: center;
  color: white;
  border-radius: 2px;
  background-color: #ff4858;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;
`;
