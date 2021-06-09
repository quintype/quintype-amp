import React, { Fragment } from "react";
import { withStoryAndConfig } from "../../context";
import { WebPush, WebPushWidget, WebengageSubscribeButton, Spacer, Analytics } from "../../atoms";
import { WebEngageTypes } from "./types";
import { getWebengageConfig } from "./helpers";
import get from "lodash.get";

export const WebEngageBase = ({ story, config, buttonText, width, height, visibility }: WebEngageTypes) => {
  const webengageConfig = getWebengageConfig({ story, config });
  if (!webengageConfig) return null;
  const { trackingCode, websiteUrl } = webengageConfig;
  const helperIframeUrl = get(
    config,
    ["opts", "featureConfig", "webengage", "helperIframeUrl"],
    "/amp-web-push-helper-iframe-url.html?version=1"
  );
  const permissionDialogUrl = get(
    config,
    ["opts", "featureConfig", "webengage", "permissionDialogUrl"],
    "/amp-web-push-permission-dialog-url.html?version=1"
  );
  const serviceWorkerUrl = get(
    config,
    ["opts", "featureConfig", "webengage", "serviceWorkerUrl"],
    "/service-worker.js"
  );

  return (
    <Fragment>
      <Spacer token="m" />
      <Analytics id="webengage" type="webengage" targets={trackingCode} />
      <WebPush
        id="amp-web-push"
        helper-iframe-url={`${websiteUrl}${helperIframeUrl}`}
        permission-dialog-url={`${websiteUrl}${permissionDialogUrl}`}
        service-worker-url={`${websiteUrl}${serviceWorkerUrl}`}
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
