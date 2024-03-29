import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { StyledO2PlayerTypes, O2PlayerTypes } from "./types";
import styled from "styled-components";

export const StyledO2Player = styled.div.attrs(({ style }: StyledO2PlayerTypes) => ({
  style
}))<StyledO2PlayerTypes>``;

export const O2Player = ({ inlineStyles, ...props }: O2PlayerTypes) => {
  if (!(props["data-pid"] || props["data-bcid"] || props["data-vid"])) {
    return null;
  }
  const { width, height, layout, title } = props;
  const setDefaultLayout = !width || !height || !layout || !title;
  const componentProps: O2PlayerTypes = setDefaultLayout
    ? {
        ...props,
        width: "16",
        height: "9",
        layout: "responsive",
        title: "o2player"
      }
    : props;
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-o2-player"
          src="https://cdn.ampproject.org/v0/amp-o2-player-0.1.js"
        />
      </Helmet>
      <StyledO2Player style={inlineStyles}>
        <amp-o2-player {...componentProps} />
      </StyledO2Player>
    </Fragment>
  );
};
