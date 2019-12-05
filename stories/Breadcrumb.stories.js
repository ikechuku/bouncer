import React from "react";
import Styled, { ThemeProvider } from "styled-components";
import theme from "../src/components/theme";
import Breadcrumb from "../src/components/breadcrumb";
import { withKnobs } from "@storybook/addon-knobs";
import { color } from "../src/components/color/mixins";
import { fontSize } from "../src/components/text/mixins";
const P = Styled.p`
    ${color}
    ${fontSize}
    padding:0 0.3rem 0 0.3rem;
`;

export const primary = () => (
  <ThemeProvider theme={theme}>
    <Breadcrumb primaryLight>
      <P secondaryLightColor small>
        Home
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P secondaryLightColor small>
        Product
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P xSmall>Headphones</P>
    </Breadcrumb>
    <br />
    <Breadcrumb primary>
      <P secondaryLightColor small>
        Home
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P secondaryLightColor small>
        Product
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P xSmall>Headphones</P>
    </Breadcrumb>
    <br />
    <Breadcrumb primaryDark>
      <P secondaryLightColor small>
        Home
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P secondaryLightColor small>
        Product
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P xSmall>Headphones</P>
    </Breadcrumb>
    <br />
    <Breadcrumb primaryDarker>
      <P secondaryLightColor small>
        Home
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P secondaryLightColor small>
        Product
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P secondaryLightColor xSmall>
        Headphones
      </P>
    </Breadcrumb>
  </ThemeProvider>
);
export const danger = () => (
  <ThemeProvider theme={theme}>
    <Breadcrumb danger>
      <P secondaryLightColor small>
        Home
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P secondaryLightColor small>
        Product
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P xSmall>Headphones</P>
    </Breadcrumb>
    <br />
    <Breadcrumb dangerDark>
      <P secondaryLightColor small>
        Home
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P secondaryLightColor small>
        Product
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P xSmall>Headphones</P>
    </Breadcrumb>
    <br />
    <Breadcrumb dangerDarker>
      <P secondaryLightColor small>
        Home
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P secondaryLightColor small>
        Product
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P xSmall>Headphones</P>
    </Breadcrumb>
  </ThemeProvider>
);
export const secondary = () => (
  <ThemeProvider theme={theme}>
    <Breadcrumb secondary>
      <P small>Home</P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P small>Product</P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P xSmall>Headphones</P>
    </Breadcrumb>
    <br />
    <Breadcrumb secondaryDark>
      <P small>Home</P>
      <P medium>/</P>
      <P small>Product</P> <P medium>/</P> <P xSmall>Headphones</P>
    </Breadcrumb>
    <br />
    <Breadcrumb secondaryDarker>
      <P secondaryLightColor small>
        Home
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P secondaryLightColor small>
        Product
      </P>
      <P secondaryDarkColor medium>
        /
      </P>
      <P secondaryLightColor xSmall>
        Headphones
      </P>
    </Breadcrumb>
  </ThemeProvider>
);
export const warning = () => (
  <ThemeProvider theme={theme}>
    <Breadcrumb warning>
      <P small>Home</P>
      <P medium>/</P>
      <P small>Product</P> <P medium>/</P> <P xSmall>Headphones</P>
    </Breadcrumb>
    <br />
    <Breadcrumb warningDark>
      <P small>Home</P>
      <P medium>/</P>
      <P small>Product</P> <P medium>/</P> <P xSmall>Headphones</P>
    </Breadcrumb>
    <br />
    <Breadcrumb warningDarker>
      <P small>Home</P>
      <P medium>/</P>
      <P small>Product</P> <P medium>/</P> <P xSmall>Headphones</P>
    </Breadcrumb>
  </ThemeProvider>
);
export const success = () => (
  <ThemeProvider theme={theme}>
    <Breadcrumb success>
      <P small>Home</P>
      <P medium>/</P>
      <P small>Product</P> <P medium>/</P> <P xSmall>Headphones</P>
    </Breadcrumb>
    <br />
    <Breadcrumb successDark>
      <P small>Home</P>
      <P medium>/</P>
      <P small>Product</P> <P medium>/</P> <P xSmall>Headphones</P>
    </Breadcrumb>
    <br />
    <Breadcrumb successDarker>
      <P small>Home</P>
      <P medium>/</P>
      <P small>Product</P> <P medium>/</P> <P xSmall>Headphones</P>
    </Breadcrumb>
  </ThemeProvider>
);
export default {
  title: "Breadcrumb",
  decorators: [withKnobs]
};
