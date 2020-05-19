import React from "react";
import { WebPushWidgetTypes } from "./types";

export const WebPushWidget = (props: WebPushWidgetTypes) => {
  return <amp-web-push-widget layout="fixed" {...props} />;
};
