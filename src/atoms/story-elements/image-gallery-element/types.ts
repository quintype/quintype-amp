import { Common } from "../../common-types";
import { StoryElement } from "../../../types/story";

export interface ImageGalleryTypes extends Common {
  element: StoryElement;
  lightbox?: string | boolean;
  type?: string;
  aspectRatio?: number[];
}
