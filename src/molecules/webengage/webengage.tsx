import React, { Fragment } from "react";
import get from "lodash.get";
import { withStoryAndConfig } from "../../context";
import { WebPush, WebPushWidget, WebengageSubscribeButton, Spacer, Analytics } from "../../atoms";
import { WebEngageTypes } from "./types";
import { getWebengageConfig } from "./helpers";

export const WebEngageBase = ({ story, config, buttonText, width, height, visibility }: WebEngageTypes) => {
  const webengageConfig = getWebengageConfig({ story, config });
  const isWebEngageEnabled = get(config, ["opts", "featureConfig", "webengage", "isEnabled"], null);

  if (!webengageConfig || !isWebEngageEnabled) return null;
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

/**
 * WebEngage Component uses the WebPush, WebPushWidget and WebengageSubscribeButton atomic components internally.
 *
 * ```js
 * <WebEngage />
 * ```
 *
 * @param {Object} props Object containing parameters passed to the render prop
 * @param {String} props.buttonText Optional. A String which shows on the button.
 * @param {String} props.width Optional. A String which specifies the width of the button.
 * @param {String} props.height Optional. A String which specifies the height of the button.
 *
 *  @category Molecules
 * @component
 */

export const WebEngage = withStoryAndConfig(WebEngageBase);
