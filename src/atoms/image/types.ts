import { Common } from "../common-types";
import { Config } from "../../types/config";
import { Story } from "../../types/story";
export interface ImageTypes extends Common {
  metadata: ImageMetadata | null;
  config: Config;
  slug: string | null;
  alt: string;
  aspectRatio?: number[];
  opts?: object;
  attribution?: string;
  lightbox?: string | boolean;
  useFallbackImage?: boolean;
  story?: Story;
  disableImgPreload?: boolean;
}

interface ImageMetadata {
  width: number;
  height: number;
}

export interface AmpImgPropTypes extends Common {
  alt: string;
  src?: string;
  srcset?: string;
  attribution?: string;
  lightbox?: string | boolean;
}
