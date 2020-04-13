import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { DfpAdTypes } from "./types";

export const DfpAd = ({ children, ...rest }: DfpAdTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js" />
      </Helmet>
      <amp-ad type="doubleclick" {...rest}>
        {children}
      </amp-ad>
    </Fragment>
  );
};
