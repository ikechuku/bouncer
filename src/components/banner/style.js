import Styled from "styled-components";
import backgroundColor from "../color/mixins";

const HeroOneDIV = Styled.div`
margin-top:"36px";
background-color: #33A0FF;
${backgroundColor};
overflow: "visible";
height: 611px;
@media (max-width: 768px) {
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
}
`;
const HeroOneContainerDIV = Styled.section`
max-width: "1139px";
margin: 0px auto;
display:flex;
justify-content:space-between;
align-items: flex-start;
@media (max-width: 1024px) {
    padding: 20px;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    background-color: 33A0FF;
    ${backgroundColor};
    width:100%;
    height: auto;
    padding: 0px;
}
`;
const HeroOneTextDIV = Styled.div`
display:flex;
flex-direction: column;
justify-content:space-around;
`;
const ImageDIV = Styled.div`
position: relative;
top: -98px;
bottom: 0px;
width: 100%;
display: flex;
justify-content: center;
height: auto;
overflow: none;
img{
  max-width:677px;
}
@media (max-width: 1024px) {
  position: relative;
  top: 0px;
  botton: 0px;
  background-color: 33A0FF;
  ${backgroundColor};
}      
`;

export { HeroOneContainerDIV, HeroOneDIV, HeroOneTextDIV, ImageDIV };
