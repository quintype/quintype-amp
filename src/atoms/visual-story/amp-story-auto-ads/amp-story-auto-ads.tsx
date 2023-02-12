import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { withStoryAndConfig } from "../../../context";
import { AutoAdsTypes } from "./types";
import { getTargetingInfo } from "../../dfp-ad/helpers";
import { getVisualStoryAdConfig } from "../../../utils/visual-story-config";

export const AmpStoryAutoAdsBase = ({ story, config }: AutoAdsTypes) => {
  const { doubleClick, adsense } = getVisualStoryAdConfig(config, story);
  if (!doubleClick && !adsense.clientId) return null;
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
        {doubleClick && (
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "ad-attributes": {
                  type: "doubleclick",
                  "data-slot": doubleClick,
                  json: getTargetingInfo({ config, story })
                }
              })
            }}
          />
        )}
        {adsense.clientId && (
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "ad-attributes": {
                  type: "adsense",
                  "data-ad-client": adsense.clientId,
                  "data-ad-slot": adsense.slotId
                }
              })
            }}
          />
        )}
      </amp-story-auto-ads>
    </Fragment>
  );
};

export const AmpStoryAutoAds = withStoryAndConfig(AmpStoryAutoAdsBase);
