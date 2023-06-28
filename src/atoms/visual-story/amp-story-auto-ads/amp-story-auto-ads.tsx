import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { withStoryAndConfig } from "../../../context";
import { AutoAdsTypes } from "./types";
import { getTargetingInfo } from "../../dfp-ad/helpers";
import { getVisualStoryAdConfig } from "../../../utils/visual-story-config";

export const AmpStoryAutoAdsBase = ({ story, config }: AutoAdsTypes) => {
  const { doubleClick, adsense, mgId } = getVisualStoryAdConfig(config, story);
  if (!doubleClick && !adsense.clientId && !mgId.widgetId) return null;
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-story-auto-ads"
          src="https://cdn.ampproject.org/v0/amp-story-auto-ads-0.1.js"
        />
      </Helmet>
      {
        (doubleClick || adsense.clientId || mgId.widgetId) && (
          <amp-story-auto-ads>
            <script
              type="application/json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "ad-attributes": {
                    type: doubleClick ? "doubleclick" : adsense.clientId ? "adsense" : "mgid",
                    ...(doubleClick && {
                      "data-slot": doubleClick,
                      json: getTargetingInfo({ config, story })
                    }),
                    ...(adsense.clientId && {
                      "data-ad-client": adsense.clientId,
                      "data-ad-slot": adsense.slotId
                    }),
                    ...(mgId.widgetId && { "data-widget": mgId.widgetId })
                  }
                })
              }}
            />
          </amp-story-auto-ads>
        )
      }
    </Fragment>
  );
};

export const AmpStoryAutoAds = withStoryAndConfig(AmpStoryAutoAdsBase);
