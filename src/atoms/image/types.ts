import { Common } from "../common-types";

export interface ImageTypes extends Common {
  metadata: ImageMetadata;
  imgSlug: string;
  aspectRatio: [number];
  opts?: object;
  width: string;
  height: string;
}

interface ImageMetadata {
  width: string;
  height: string;
}
