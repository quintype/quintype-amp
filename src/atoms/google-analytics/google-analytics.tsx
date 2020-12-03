import React from "react";
import { withConfig } from "../../context";
import { Analytics } from "../analytics";

const GoogleAnalyticsBase = ({ config }) => {
  const googleAnalyticsTrackingId = config.ampConfig["google-analytics-tracking-id"];
  if (!googleAnalyticsTrackingId) return null;

  const gaConfig = {
    vars: {
      account: googleAnalyticsTrackingId
    },
    triggers: {
      trackPageview: {
        on: "visible",
        request: "pageview"
      }
    }
  };
  return <Analytics type="googleanalytics" targets={gaConfig} />;
};

const GoogleAnalytics = withConfig(GoogleAnalyticsBase);
export { GoogleAnalytics, GoogleAnalyticsBase };
