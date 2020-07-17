import { Story } from "../../types/story";
import { Config } from "../../types/config";

export interface RelatedStoriesTypes {
  story: Story;
  config: Config;
  heading?: string;
  fallbackSrc?: string;
  aspectRatio?: number[];
}
