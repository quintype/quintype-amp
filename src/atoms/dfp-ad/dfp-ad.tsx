import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { DfpAdTypes } from "./types";
import { withStoryAndConfig } from "../../context";
import { getTargetingInfo } from "./helpers";
import get from "lodash.get";

export const DfpAdBase = ({ story, config, children, prefetchScript, ...rest }: DfpAdTypes) => {
  const adFree = get(config, ["additionalConfig", "subscriber"], false);

  if (adFree) return null;
  return (
    <Fragment>
      <Helmet>
        {prefetchScript && (
          <link rel="dns-prefetch" href="https://cdn.ampproject.org/v0/amp-ad-0.1.js" crossorigin="anonymous" />
        )}
        <script async={undefined} custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js" />
      </Helmet>
      <amp-ad type="doubleclick" json={getTargetingInfo({ story, config })} {...rest}>
        {children}
      </amp-ad>
    </Fragment>
  );
};

export const DfpAd = withStoryAndConfig(DfpAdBase);
