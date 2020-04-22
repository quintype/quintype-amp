import { Story } from "../../types/story";

export interface RelatedStoriesTypes {
  stories: Story[];
  heading?: string;
  fallbackSrc?: string;
  aspectRatio?: number[];
}
