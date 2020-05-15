import React, { Fragment } from "react";
import { WebPushTypes } from "./types";
import { Helmet } from "react-helmet";

export const WebPush = (props: WebPushTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-web-push"
          src="https://cdn.ampproject.org/v0/amp-web-push-0.1.js"
        />
      </Helmet>
      <amp-web-push layout="nodisplay" {...props} />
    </Fragment>
  );
};
