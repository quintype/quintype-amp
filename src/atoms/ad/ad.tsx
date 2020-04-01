import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { AdTypes } from "./types";

export const Ad = ({ children, ...rest }: AdTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js" />
      </Helmet>
      <amp-ad {...rest}>{children}</amp-ad>
    </Fragment>
  );
};
