import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { DfpAdTypes } from "./types";
import { withStoryAndConfig } from "../../context";
import { getTargetingInfo } from "./helpers";
import styled from "styled-components";

export const StyledDfpAd = styled.div.attrs(({ inlineStyles }: StyledDfpAdTypes) => ({
  style: inlineStyles
}))<StyledDfpAdTypes>``;

export interface StyledDfpAdTypes {
  inlineStyles?: object;
}

const DfpAdBase = ({ inlineStyles, story, config, children, ...rest }: DfpAdTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js" />
      </Helmet>
      <StyledDfpAd inlineStyles={inlineStyles}>
        <amp-ad type="doubleclick" json={getTargetingInfo({ story, config })} {...rest}>
          {children}
        </amp-ad>
      </StyledDfpAd>
    </Fragment>
  );
};

export const DfpAd = withStoryAndConfig(DfpAdBase);
