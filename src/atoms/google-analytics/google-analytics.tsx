import React from "react";
import { withConfig } from "../../context";
import { Analytics } from "../analytics";
import { infiniteScrollExists } from "../../helpers";
import get from "lodash.get";

const DefaultGoogleAnalytics = ({ gaId, config }) => {
  if (typeof gaId !== "string") return null;
  const componentArr = gaId.split(",").map((id) => {
    const gaConfig = {
      vars: {
        account: id
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
  });
  return <>{componentArr}</>;
};

const GoogleAnalytics4 = ({ gaId, config }) => {
  if (typeof gaId !== "string") return null;
  const componentArr = gaId.split(",").map((id) => {
    const gaConfig = {
      vars: {
        gtag_id: id,
        config: {
          [id]: { groups: "default" }
        }
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
    return <Analytics type="gtag" targets={gaConfig} data-credentials="include" />;
  });
  return <>{componentArr}</>;
};

const GoogleAnalyticsBase = ({ config }) => {
  const gaIdFromAmpConfig = get(config, ["ampConfig", "google-analytics-tracking-id"], "");
  let gaId = get(config, ["opts", "featureConfig", "analytics", "googleAnalytics", "id"]);
  gaId = typeof gaId === "function" ? gaId(config) : gaId;

  const _gaId = gaId || gaIdFromAmpConfig || "";
  if (!_gaId) return null;

  const isGA3 = _gaId.startsWith("UA-");
  return isGA3 ? (
    <DefaultGoogleAnalytics gaId={_gaId} config={config} />
  ) : (
    <GoogleAnalytics4 gaId={_gaId} config={config} />
  );
};

/**
 * Google Analytics Component can be used for analytics purposes. This supports GA4 and the older version. 
 * Id will be picked from Amp config of BOLD. `Settings > Configure > AMP > GA tracking id`.
 * 
 * GA4 config will be picked up from `featureConfig`
 * Example: 
 * ...
 * ampRoutes(app, {
 *  featureConfig: {
 *    analytics: {
        googleAnalytics: { id: "G-XXXXXXXX" }
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
