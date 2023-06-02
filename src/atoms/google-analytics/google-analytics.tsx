import React from "react";
import { withConfig } from "../../context";
import { Analytics } from "../analytics";
import { infiniteScrollExists } from "../../helpers";
import get from "lodash.get";

const DefaultGoogleAnalytics = ({ config }) => {
  const googleAnalyticsTrackingId = config.ampConfig["google-analytics-tracking-id"];
  if (!googleAnalyticsTrackingId) return null;

  const gaConfig = {
    vars: {
      account: googleAnalyticsTrackingId
    },
    triggers: {
      trackPageview: {
        on: infiniteScrollExists(config) ? "amp-next-page-scroll" : "visible",
        request: "pageview",
        scrollSpec: {
          useInitialPageSize: infiniteScrollExists(config)
        }
      }
    }
  };
  return <Analytics type="googleanalytics" targets={gaConfig} />;
};

const GoogleAnalytics4 = ({config}) => {
  const Ga4ConfigObject = get(config, ["opts", "featureConfig", "ga4Config"], null);
  return <Analytics type="googleanalytics" targets={Ga4ConfigObject} config="./ga4.json" data-credentials="include"/>;
};

const GoogleAnalyticsBase = ({config}) => {
  const googleAnalyticsTrackingId = config.ampConfig["google-analytics-tracking-id"];
  if (!googleAnalyticsTrackingId) return null;

  const regex = /^UA-/;
  const isGA3 = regex.test(googleAnalyticsTrackingId);

  return isGA3 ? <DefaultGoogleAnalytics config={config} /> : <GoogleAnalytics4 config={config} />;
};

/**
 * Google Analytics Component can be used for analytics purposes. This supports GA4 and the older version. 
 * Id will be picked from Amp config of BOLD. `Settings > Configure > AMP > GA tracking id`.
 * 
 * GA4 config will be picked up from `featureConfig`. Page Builder clients can add this config inside Amp configuration settings that is under `general > manage > AMP` and custom clients can add inside `ampRoutes` function in `app.js` file. The config will be an object with the required parameters and values. 
 * Example: 
 * {
 *   vars: {
      "GA4_MEASUREMENT_ID": "G-XXXXXXXX",
      "GA4_ENDPOINT_HOSTNAME": "www.google-analytics.com",
      "DEFAULT_PAGEVIEW_ENABLED": true,    
      "GOOGLE_CONSENT_ENABLED": false,
      "WEBVITALS_TRACKING": false,
      "PERFORMANCE_TIMING_TRACKING": false,
      "SEND_DOUBLECLICK_BEACON": false
    }
    triggers: {}
 * }
 * ...
 * ampRoutes(app, {
 *  featureConfig: {
 *    ga4Config: { 
        "GA4_MEASUREMENT_ID": "G-XXXXXXXX",
        "GA4_ENDPOINT_HOSTNAME": "www.google-analytics.com",
        "DEFAULT_PAGEVIEW_ENABLED": true,    
        "GOOGLE_CONSENT_ENABLED": false,
        "WEBVITALS_TRACKING": false,
        "PERFORMANCE_TIMING_TRACKING": false,
        "SEND_DOUBLECLICK_BEACON": false
     }
 *  }
 * })
 * ...
 * ```
 * @category Atoms
 * @component
 * 
 */

const GoogleAnalytics = withConfig(GoogleAnalyticsBase);
export { GoogleAnalytics, GoogleAnalyticsBase, DefaultGoogleAnalytics, GoogleAnalytics4 };
