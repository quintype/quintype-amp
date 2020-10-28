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
      "amp-instagram": InstagramTypes;
      "amp-web-push";
      "amp-web-push-widget";
      "amp-o2-player";
      "amp-analytics";
      "amp-nested-menu";
      "amp-next-page";
      "amp-live-list";
      "amp-story-grid-layer";
      "amp-story-page";
      "amp-story";
      "amp-video";
      "amp-story-bookend";
      "amp-story-auto-ads"
    }
  }
}

// Should only contain the common attributes given in https://amp.dev/documentation/guides-and-tutorials/learn/common_attributes/?format=websites
// do not add anything else here
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
