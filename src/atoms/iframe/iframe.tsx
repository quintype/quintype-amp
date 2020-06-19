import React, { Fragment } from "react";
import { IframeTypes } from "./types";
import Helmet from "react-helmet";
import styled from "styled-components";

export const StyledIframe = styled.div.attrs(({ style }: IframeTypes & { style?: object }) => ({
  style
}))<IframeTypes>``;

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
      <StyledIframe style={inlineStyles}>
        <amp-iframe
          width={width}
          height={height}
          sandbox={sandbox}
          layout={layout}
          frameborder={frameborder}
          src={src}
          {...restProps}>
          {children && children}
        </amp-iframe>
      </StyledIframe>
    </Fragment>
  );
};

export { Iframe };
