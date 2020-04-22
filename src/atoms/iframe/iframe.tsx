import React, { Fragment } from "react";
import { IframeTypes } from "./types";
import Helmet from "react-helmet";

const Iframe = ({
  src,
  sandbox = "allow-scripts",
  layout = "responsive",
  frameborder = "0",
  width = "16",
  height = "9",
  children,
  ...restProps
}: IframeTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js" />
      </Helmet>
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
    </Fragment>
  );
};

export { Iframe };
