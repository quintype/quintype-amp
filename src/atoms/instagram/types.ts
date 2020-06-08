import { Common } from "../common-types";

export interface InstagramTypes extends Common {
  "data-shortcode": string;
  "data-captioned"?: boolean;
  inlineStyles?: object;
}
