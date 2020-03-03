import { Common } from "../common-types";

export interface FacebookTypes extends Common {
  "data-href": string;
  "data-embed-as"?: "post" | "video" | "comment";
  "data-include-comment-parent"?: boolean;
  "data-align-center"?: boolean;
}