import React, { Fragment } from "react";
import { FacebookTypes } from "./types";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledFacebook = styled.div.attrs(({ inlineStyles }: StyledFacebookTypes) => ({
  style: inlineStyles
}))<StyledFacebookTypes>``;

export interface StyledFacebookTypes {
  inlineStyles?: object;
}

export const Facebook = (props, { inlineStyles }: FacebookTypes) => {
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
      <StyledFacebook inlineStyles={inlineStyles}>
        <amp-facebook {...componentProps} />
      </StyledFacebook>
    </Fragment>
  );
};
