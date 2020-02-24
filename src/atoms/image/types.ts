import { Common } from "../common-types";

export interface ImageTypes extends Common {
  metadata: ImageMetadata;
  slug: string;
  aspectRatio: [number];
  opts?: object;
  cdnImage: string;
}

interface ImageMetadata {
  width: string;
  height: string;
}
