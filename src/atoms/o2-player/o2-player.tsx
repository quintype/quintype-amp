import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { O2PlayerTypes } from "./types";

export const O2Player = (props: O2PlayerTypes) => {
  if (!(props["data-pid"] || props["data-bcid"] || props["data-vid"])) {
    return null;
  }
  const { width, height, layout } = props;
  const setDefaultLayout = !width || !height || !layout;
  const componentProps: O2PlayerTypes = setDefaultLayout
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
          custom-element="amp-o2-player"
          src="https://cdn.ampproject.org/v0/amp-o2-player-0.1.js"
        />
      </Helmet>
      <amp-o2-player {...componentProps} />
    </Fragment>
  );
};
