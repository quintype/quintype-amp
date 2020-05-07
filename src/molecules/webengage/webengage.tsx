import React, { Fragment } from "react";
import { withConfig } from "../../context";
import { WebPush, WebPushWidget, WebengageSubscribeButton, Spacer, Analytics } from "../../atoms";
import get from "lodash.get";
import { WebEngageTypes } from "./types";

export const WebEngageBase = ({ config, buttonText, width, height, visibility }: WebEngageTypes) => {
  const enabled = get(config, ["ampConfig", "webengage"], null);
  if (!enabled) return null;

  const licenseCode = get(config, ["ampConfig", "webengage", "license-code"], null);
  const trackingCode = get(config, ["ampConfig", "webengage", "tracking-code"], null);
  const websiteUrl = get(config, ["ampConfig", "webengage", "website-url"], null);
  if (!licenseCode || !trackingCode || !websiteUrl)
    throw new Error(
      "WebEngage is enabled but required params are missing. Please provide license-code, tracking-code and website-url in config"
    );

  return (
    <Fragment>
      <Spacer token="m" />
      <Analytics type="webengage" targets={JSON.parse(trackingCode)} />
      <WebPush
        id="amp-web-push"
        helper-iframe-url={`${websiteUrl}/api/amp-web-push-helper-frame.html?version=1`}
        permission-dialog-url={`${websiteUrl}/api/amp-permission-dialog-web-engage.html?version=1`}
        service-worker-url={`${websiteUrl}/api/amp-service-worker-web-engage.js?licensecode=${licenseCode}&version=1`}
      />
      <WebPushWidget visibility={visibility || "unsubscribed"} width={width || "350px"} height={height || "60px"}>
        <WebengageSubscribeButton on="tap:amp-web-push.subscribe" text={buttonText} />
      </WebPushWidget>
    </Fragment>
  );
};

export const WebEngage = withConfig(WebEngageBase);
