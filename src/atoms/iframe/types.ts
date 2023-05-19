import { Common } from "../common-types";

export interface IframeTypes extends Common {
  src?: string;
  scrolling?: string;
  sandbox?: string;
  children?: JSX.Element | JSX.Element[] | React.ReactChildren;
  srcdoc?: string;
  frameborder?: string;
  allowfullscreen?: string;
  allowpaymentrequest?: string;
  allowtransparency?: string;
  referrerpolicy?: string;
  inlineStyles?: object;
  title: string;
}
