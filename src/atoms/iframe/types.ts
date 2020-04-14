import { Common } from "../common-types";

export interface IframeTypes extends Common {
  src?: string;
  sandbox?: string;
  IframePlaceholder?: JSX.Element | JSX.Element[];
  srcdoc?: string;
  frameborder?: string;
  allowfullscreen?: string;
  allowpaymentrequest?: string;
  allowtransparency?: string;
  referrerpolicy?: string;
}
