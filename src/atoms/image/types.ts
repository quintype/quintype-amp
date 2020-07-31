import { Common } from "../common-types";
import { Config } from "../../types/config";

export interface ImageTypes extends Common {
  metadata: ImageMetadata;
  config: Config;
  slug: string;
  alt: string;
  aspectRatio?: number[];
  width?: string;
  height?: string;
  opts?: object;
  attribution?: string;
  lightbox?: string | boolean;
  prefetchImage?: boolean;
}

interface ImageMetadata {
  width: number;
  height: number;
}

export interface AmpImgPropTypes extends Common {
  src: string;
  alt: string;
  srcset: string;
  attribution?: string;
}
