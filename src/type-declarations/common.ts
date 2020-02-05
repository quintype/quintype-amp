// This element includes common attributes extended to AMP components.
// https://amp.dev/documentation/guides-and-tutorials/learn/common_attributes/?format=websites
export interface Common {
  fallback?: boolean;
  heights?: string;
  layout?: "nodisplay"|"fixed"|"responsive"|"fixed-height"|"fill"|"container"|"flex-item"|"intrinsic";
  media?: string;
  noloading?: boolean;
  on?: string;
  placeholder?: boolean;
  sizes?: string;
  width?: string;
  height?: string;
}
