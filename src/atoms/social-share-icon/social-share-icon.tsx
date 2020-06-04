import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { SocialShareTypes } from "./types";
import styled from "styled-components";

const StyledSocialShare = styled("amp-social-share").attrs(({ inlineStyles }: StyledSocialShareTypes) => ({
  style: inlineStyles
}))<StyledSocialShareTypes>``;
export interface StyledSocialShareTypes {
  inlineStyles?: object;
}
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
          src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"
        />
      </Helmet>
      {type === "facebook" && (
        <StyledSocialShare
          style={styles}
          type={type}
          width={width}
          height={height}
          data-param-app_id={fbAppId}
          inlineStyles={inlineStyles}
        />
      )}
      {type !== "facebook" && (
        <StyledSocialShare style={styles} type={type} width={width} height={height} inlineStyles={inlineStyles} />
      )}
    </Fragment>
  );
};
