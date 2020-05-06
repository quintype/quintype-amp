import React, { Fragment } from "react";
import { withConfig } from "../../context";
import { WebPush, WebPushWidget, Head, WebengageSubscribeButton } from "../../atoms";
import get from "lodash.get";

const WebEngageBase = ({ config }) => {
  const enabled = get(config, ["ampConfig", "webengage"], null);
  if (!enabled) return null;

  const licenseCode = get(config, ["ampConfig", "webengage", "license-code"], null);
  const trackingCode = get(config, ["ampConfig", "webengage", "tracking-code"], null);
  const websiteUrl = get(config, ["ampConfig", "webengage", "website-url"], null);
  if (!licenseCode || !trackingCode || !websiteUrl)
    throw new Error(
      "WebEngage is enabled but required params are missing. Please provide license-code, tracking-code and website-url in config"
    );

  // TO DO: Once analytics component is available, use that instead of manually adding amp-analytics
  return (
    <Fragment>
      <Head>
        <script
          async={undefined}
          custom-element="amp-analytics"
          src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
        />
      </Head>

      <amp-analytics id="webengage" type="webengage">
        <script type="application/json">{trackingCode}</script>
      </amp-analytics>
      <WebPush
        id="amp-web-push"
        helper-iframe-url={`${websiteUrl}/api/amp-web-push-helper-frame.html?version=1`}
        permission-dialog-url={`${websiteUrl}/api/amp-permission-dialog-web-engage.html?version=1`}
        service-worker-url={`${websiteUrl}/api/amp-service-worker-web-engage.js?licensecode=${licenseCode}&version=1`}
      />
      <WebPushWidget visibility="unsubscribed" width="350px" height="60px">
        <WebengageSubscribeButton on="tap:amp-web-push.subscribe" />
      </WebPushWidget>
    </Fragment>
  );
};

export const WebEngage = withConfig(WebEngageBase);
