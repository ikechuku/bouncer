import React from "react";
import Styled from "styled-components";
import iphonePic from "./assets/pic.png";
import Text from "../../components/text";

const Banner = ({
  contentSize,
  iPoneSize,
  topMargin,
  height,
  width,
  overflow
}) => {
  const HeroOneDIV = Styled.div`
    margin-top:${topMargin || "36px"}
    background-color: #33a0ff;
    overflow:${overflow || "visible"}
    height: 611px;
    @media (max-width: 768px) {
        height: 100%;
        display:flex;
        flex-direction: column;
        align-items: center;
    }
`;
  const HeroOneContainerDIV = Styled.section`
    max-width: ${width || "1139px"};
    margin: 0px auto;
    display:flex;
    justify-content:space-between;
    align-items: flex-start;
    @media (max-width: 1024px) {
        padding: 20px;
        display:flex;
        flex-direction: column;
        justify-content:space-between;
        background-color: #33a0ff;
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
      background-color:  #33a0ff;
      }

      
`;
  return (
    <HeroOneDIV>
      <HeroOneContainerDIV>
        <HeroOneTextDIV>
          <div className="textPhone">
            <Text xxlarge ht4 transparentColor>
              iPhone 6 Plus
            </Text>
          </div>
          <div className="textPhone">
            <Text small ht6 transparentColor>
              Performance and design. Taken right to the edge.
            </Text>
          </div>
          <div className="textPhone">
            <Text xSmall bold ht6 transparentColor>
              SHOP NOW
            </Text>

            <div className="Rectangle-15"></div>
          </div>
        </HeroOneTextDIV>
        <ImageDIV className="image_container">
          <img src={iphonePic} alt="Iphone" width="100%" height="auto" />
        </ImageDIV>
      </HeroOneContainerDIV>
    </HeroOneDIV>
  );
};

export default Banner;
