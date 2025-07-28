import React, { Fragment } from "react";
import { FacebookTypes } from "./types";
import { Helmet } from "react-helmet";
import get from "lodash.get";

export const Facebook = (config, props: FacebookTypes) => {
  const { width, height, layout, title } = props;
  const setDefaultLayout = !width || !height || !layout;
  const enableAmpAccess = get(config, ["additionalConfig", "isAmpAccessEnabled"], false);
  const ampAccess = enableAmpAccess && { "amp-access": "loggedIn" };
  console.log("FROM FACEBOOK ---------", config?.additionalConfig, ampAccess);

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
      <amp-facebook {...ampAccess} {...componentProps} title={title} />
    </Fragment>
  );
};
