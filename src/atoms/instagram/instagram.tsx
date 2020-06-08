import React, { Fragment } from "react";
import { InstagramTypes } from "./types";
import { Helmet } from "react-helmet";
import styled from "styled-components";

export const StyledInstagram = styled.div.attrs(({ inlineStyles }: StyledInstagramTypes) => ({
  style: inlineStyles
}))<StyledInstagramTypes>``;

export interface StyledInstagramTypes {
  inlineStyles?: object;
}

export const Instagram = (props, { inlineStyles }: InstagramTypes) => {
  const { width, height, layout } = props;
  const setDefaultLayout = !width || !height || !layout;
  const componentProps: InstagramTypes = setDefaultLayout
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
          custom-element="amp-instagram"
          src="https://cdn.ampproject.org/v0/amp-instagram-0.1.js"
        />
      </Helmet>
      <StyledInstagram inlineStyles={inlineStyles}>
        <amp-instagram {...componentProps} />
      </StyledInstagram>
    </Fragment>
  );
};
