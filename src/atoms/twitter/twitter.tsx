import React, { Fragment } from "react";
import { TwitterTypes } from "./types";
import { Helmet } from "react-helmet";

export const Twitter = (props: TwitterTypes) => {
  const { width, height, layout } = props;
  const setDefaultLayout = !width || !height || !layout;

  const componentProps: TwitterTypes = setDefaultLayout
    ? {
        ...props,
        width: "390",
        height: "330",
        layout: "responsive"
      }
    : props;
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-twitter" src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js" />
      </Helmet>
      <amp-twitter {...componentProps} />
    </Fragment>
  );
};
