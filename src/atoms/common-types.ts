declare global {
  namespace JSX {
    interface IntrinsicElements {
      "amp-img";
      "amp-carousel";
      "amp-facebook";
      "amp-twitter";
      "amp-sidebar";
      "amp-social-share";
      "amp-youtube";
      "amp-ad";
      "amp-iframe";
      "amp-dailymotion";
      "amp-mathml";
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
