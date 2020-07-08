import { Common } from "../common-types";

export interface TwitterTypes extends Common {
  "data-tweetid": string;
  children?: any;
  inlineStyles?: object;
  title?: string;
}
