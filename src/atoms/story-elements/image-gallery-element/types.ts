import { Common } from "../../common-types";
import { StoryElement } from "../../../types/story";
import { Config } from "../../../types/config";

export interface ImageGalleryTypes extends Common {
  element: StoryElement;
  config?: Config;
  lightbox?: string | boolean;
  type?: string;
  aspectRatio?: number[];
}
