import { CarouselTypes } from "./carousel/types";
import { FacebookTypes } from "./facebook/types";
import { TwitterTypes } from "./twitter/types";
import { InstagramTypes } from "./instagram/types";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "amp-img": any;
      "amp-carousel": CarouselTypes;
      "amp-facebook": FacebookTypes;
      "amp-twitter": TwitterTypes;
      "amp-sidebar";
      "amp-social-share";
      "amp-youtube";
      "amp-ad";
      "amp-iframe";
      "amp-dailymotion";
      "amp-mathml";
      "amp-o2-player";
      "amp-instagram": InstagramTypes;
      "amp-web-push";
    }
  }
}

// This element includes common attributes extended to AMP components.
// https://amp.dev/documentation/guides-and-tutorials/learn/common_attributes/?format=websites
export interface Common {
  fallback?: string;
  heights?: string;
  layout?: "nodisplay" | "fixed" | "responsive" | "fixed-height" | "fill" | "container" | "flex-item" | "intrinsic";
  media?: string;
  noloading?: boolean;
  on?: string;
  placeholder?: string;
  sizes?: string;
  width?: string;
  height?: string;
}
