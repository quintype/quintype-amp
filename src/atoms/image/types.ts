import { Common } from "../common-types";

export interface ImageTypes extends Common {
  src: string;
  alt: string;
  srcset?: string;
  attribution?: string;
}
