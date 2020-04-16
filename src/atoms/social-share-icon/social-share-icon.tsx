import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { SocialShareTypes } from "./types";

export const SocialShareIcon = ({ type, width = "40", height = "40", styles = {} }: SocialShareTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-social-share"
          src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"
        />
      </Helmet>
      <amp-social-share style={styles} type={type} width={width} height={height} />
    </Fragment>
  );
};