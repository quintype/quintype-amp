import { Common } from "../common-types";

export interface O2PlayerTypes extends Common {
  "data-pid": string;
  "data-bcid": string;
  "data-vid": string;
  "data-bid"?: string;
  "data-macros"?: string;
  inlineStyles?: object;
  title: string;
}

export interface StyledO2PlayerTypes {
  style?: object;
}
