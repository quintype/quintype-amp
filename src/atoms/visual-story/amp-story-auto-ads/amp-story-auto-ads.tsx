import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { withStoryAndConfig } from "../../../context";
import { AutoAdsTypes } from "./types";
import { getTargetingInfo } from "../../dfp-ad/helpers";

export const AmpStoryAutoAdsBase = ({ story, config }: AutoAdsTypes) => {
  const dataSlot = config.opts?.featureConfig?.visualStories?.ads?.doubleclick?.dataSlot;
  if (!dataSlot) return null;
  const adConfig = {
    "ad-attributes": {
      type: "doubleclick",
      "data-slot": dataSlot,
      json: getTargetingInfo({ config, story })
    }
  };
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-story-auto-ads"
          src="https://cdn.ampproject.org/v0/amp-story-auto-ads-0.1.js"
        />
      </Helmet>
      <amp-story-auto-ads>
        <script type="application/json" dangerouslySetInnerHTML={{ __html: JSON.stringify(adConfig) }} />
      </amp-story-auto-ads>
    </Fragment>
  );
};

export const AmpStoryAutoAds = withStoryAndConfig(AmpStoryAutoAdsBase);
