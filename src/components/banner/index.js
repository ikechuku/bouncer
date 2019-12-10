import React from "react";
import iphonePic from "./assets/pic.png";
import Text from "../../components/text";
import {
  HeroOneContainerDIV,
  HeroOneDIV,
  HeroOneTextDIV,
  ImageDIV
} from "./style";

const Banner = ({ ...props }) => {
  return (
    <HeroOneDIV {...props}>
      <HeroOneContainerDIV >
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
