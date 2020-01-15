import React from "react";
import Wrapper from "./style";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import Text from "../text";

const Brand = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Text small bold secondaryDarkerColor>
          BRAND
        </Text>
        <div className="search-list">
          <div className="search-item">
            <Text xSmall bold secondaryDarkerColor>
              Apple
            </Text>
            <Text xSmall bold secondaryDarkerColor>
              3
            </Text>
          </div>
          <div className="search-item">
            <Text xSmall bold secondaryDarkerColor>
            LG
            </Text>
            <Text xSmall bold secondaryDarkerColor>
              4
            </Text>
          </div>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Brand;
