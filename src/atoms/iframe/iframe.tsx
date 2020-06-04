import React, { Fragment } from "react";
import { IframeTypes } from "./types";
import Helmet from "react-helmet";
import styled from "styled-components";

const StyledIframe = styled("amp-iframe").attrs(({ inlineStyles }: StyledIframeTypes) => ({
  style: inlineStyles
}))<StyledIframeTypes>``;

export interface StyledIframeTypes {
  inlineStyles?: object;
}

const Iframe = ({
  src,
  sandbox = "allow-scripts allow-same-origin",
  layout = "responsive",
  frameborder = "0",
  width = "16",
  height = "9",
  children,
  inlineStyles,
  ...restProps
}: IframeTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js" />
      </Helmet>
      <StyledIframe
        inlineStyles={inlineStyles}
        width={width}
        height={height}
        sandbox={sandbox}
        layout={layout}
        frameborder={frameborder}
        src={src}
        {...restProps}>
        {children && children}
      </StyledIframe>
    </Fragment>
  );
};

export { Iframe };
