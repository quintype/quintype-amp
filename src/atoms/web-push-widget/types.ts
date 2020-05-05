import { ReactElement } from "react";

export interface WebPushWidgetTypes {
  visibility: "unsubscribed" | "subscribed" | "blocked";
  children: JSX.Element[] | JSX.Element | ReactElement | HTMLElement;
}
