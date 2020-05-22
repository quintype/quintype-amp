import React, { Fragment } from "react";
import { withStoryAndConfig } from "../../context";
import { WebPush, WebPushWidget, WebengageSubscribeButton, Spacer, Analytics } from "../../atoms";
import { WebEngageTypes } from "./types";
import { getWebengageConfig } from "./helpers";

export const WebEngageBase = ({ story, config, buttonText, width, height, visibility }: WebEngageTypes) => {
  const webengageConfig = getWebengageConfig({ story, config });
  if (!webengageConfig) return null;
  const { trackingCode, websiteUrl, licenseCode } = webengageConfig;

  return (
    <Fragment>
      <Spacer token="m" />
      <Analytics id="webengage" type="webengage" targets={trackingCode} />
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

export const WebEngage = withStoryAndConfig(WebEngageBase);
