// import * as atoms from './atomicComponents'
import { CarouselTypes } from "./carousel/types";
import { FitTextTypes } from "./fit-text/types";
import { ImageTypes } from "./image/types";
import { YoutubeTypes } from "./youtube/types";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "amp-img": ImageTypes;
      "amp-youtube": YoutubeTypes;
      "amp-carousel": CarouselTypes;
      "amp-fit-text": FitTextTypes;
    }
  }
}

// This element includes common attributes extended to AMP components.
// https://amp.dev/documentation/guides-and-tutorials/learn/common_attributes/?format=websites
export interface Common {
  fallback?: boolean;
  heights?: string;
  layout?: "nodisplay" | "fixed" | "responsive" | "fixed-height" | "fill" | "container" | "flex-item" | "intrinsic";
  media?: string;
  noloading?: boolean;
  on?: string;
  placeholder?: boolean;
  sizes?: string;
  width?: string;
  height?: string;
}
