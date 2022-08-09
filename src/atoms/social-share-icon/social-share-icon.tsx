import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { SocialShareTypes } from "./types";
import styled from "styled-components";

export const StyledSocialShare = styled.div.attrs(({ style }: { style?: object }) => ({
  style
}))``;

export const SocialShareIcon = ({
  type,
  width = "40",
  height = "40",
  styles = {},
  fbAppId,
  inlineStyles
}: SocialShareTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-social-share"
          src="https://cdn.ampproject.org/v0/amp-social-share-1.0.js"
        />
      </Helmet>
      {type === "facebook" && (
        <StyledSocialShare style={inlineStyles}>
          <amp-social-share
            style={styles}
            type={type}
            width={width}
            height={height}
            data-param-app_id={fbAppId}
            aria-label="facebook social share icon"
          />
        </StyledSocialShare>
      )}
      {type !== "facebook" && (
        <StyledSocialShare style={inlineStyles}>
          <amp-social-share style={styles} type={type} width={width} height={height} aria-label="socialshare icon" />
        </StyledSocialShare>
      )}
    </Fragment>
  );
};
