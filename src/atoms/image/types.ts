import { Common } from "../common-types";

export interface ImageTypes extends Common {
  metadata: ImageMetadata;
  slug: string;
  alt: string;
  aspectRatio?: number[];
  width?: string;
  height?: string;
  opts?: object;
  attribution?: string;
}

interface ImageMetadata {
  width: number;
  height: number;
}

export interface AmpImgPropTypes extends Common {
  src: string;
  alt: string;
  attribution?: string;
  srcset?: string;
}
