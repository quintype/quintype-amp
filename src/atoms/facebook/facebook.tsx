import React, { Fragment } from "react";
import { StyledFacebookTypes, FacebookTypes } from "./types";
import { Helmet } from "react-helmet";
import styled from "styled-components";

export const StyledFacebook = styled.div.attrs(({ style }: StyledFacebookTypes) => ({
  style
}))<StyledFacebookTypes>``;

export const Facebook = ({ inlineStyles, ...props }: FacebookTypes) => {
  const { width, height, layout } = props;
  const setDefaultLayout = !width || !height || !layout;
  const componentProps: FacebookTypes = setDefaultLayout
    ? {
        ...props,
        width: "16",
        height: "9",
        layout: "responsive"
      }
    : props;
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-facebook"
          src="https://cdn.ampproject.org/v0/amp-facebook-0.1.js"
        />
      </Helmet>
      <StyledFacebook style={inlineStyles}>
        <amp-facebook {...componentProps} />
      </StyledFacebook>
    </Fragment>
  );
};
