import React, { Fragment } from "react";
import { InstagramTypes } from "./types";
import { Helmet } from "react-helmet";
import get from "lodash.get";

export const Instagram = (config, props: InstagramTypes) => {
  const { width, height, layout } = props;
  const setDefaultLayout = !width || !height || !layout;
  const enableAmpAccess = get(config, ["additionalConfig", "isAmpAccessEnabled"], false);
  const ampAccess = enableAmpAccess && { "amp-access": "loggedIn" };
  console.log("FROM INSTAGRAM ---------", ampAccess);

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
      <amp-instagram {...componentProps} {...ampAccess} />
    </Fragment>
  );
};
