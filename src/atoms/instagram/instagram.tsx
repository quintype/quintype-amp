import React, { Fragment } from "react";
import { InstagramTypes } from "./types";
import { Helmet } from "react-helmet";

export const Instagram = (props: InstagramTypes) => {
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
      <amp-instagram {...componentProps} />
    </Fragment>
  );
};
