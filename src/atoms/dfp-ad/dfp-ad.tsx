import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { DfpAdTypes } from "./types";
import { withStoryAndConfig } from "../../context";
import { getTargetingInfo } from "./helpers";

const DfpAdBase = ({ story, config, children, prefetchScript, ...rest }: DfpAdTypes) => {
  return (
    <Fragment>
      <Helmet>
        {prefetchScript ? (
          <script
            rel="preload"
            crossorigin="anonymous"
            async={undefined}
            custom-element="amp-ad"
            src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
          />
        ) : (
          <script async={undefined} custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js" />
        )}
      </Helmet>
      <amp-ad type="doubleclick" json={getTargetingInfo({ story, config })} {...rest}>
        {children}
      </amp-ad>
    </Fragment>
  );
};

export const DfpAd = withStoryAndConfig(DfpAdBase);
