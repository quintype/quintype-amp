import { Common } from "../common-types";

export interface ImageTypes extends Common {
  metadata: ImageMetadata;
  slug: string;
  aspectRatio: [number];
  width: string;
  height: string;
  alt: string;
  opts?: object;
}

interface ImageMetadata {
  width: string;
  height: string;
}

export interface AmpImgPropTypes extends Common {
  src: string;
  alt: string;
  attribution?: string;
  srcset?: string;
}
