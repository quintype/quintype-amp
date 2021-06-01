import React from "react";
import { withConfig } from "../../context";
import { Analytics } from "../analytics";
// import { infiniteScrollExists } from "../../helpers";

const GoogleAnalyticsBase = ({ config }) => {
  const googleAnalyticsTrackingId = config.ampConfig["google-analytics-tracking-id"];
  if (!googleAnalyticsTrackingId) return null;

  // const gaConfig = {
  //   vars: {
  //     account: googleAnalyticsTrackingId
  //   },
  //   triggers: {
  //     trackPageview: {
  //       on: infiniteScrollExists(config) ? "amp-next-page-scroll" : "visible",
  //       request: "pageview",
  //       scrollSpec: {
  //         useInitialPageSize: infiniteScrollExists(config)
  //       }
  //     }
  //   }
  // };
  return <Analytics type="googleanalytics" />;
};

const GoogleAnalytics = withConfig(GoogleAnalyticsBase);
export { GoogleAnalytics, GoogleAnalyticsBase };
