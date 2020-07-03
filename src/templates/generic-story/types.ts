import { Story } from "../../types/story";
import { Config } from "../../types/config";

export interface GenericStoryTypes {
  story: Story;
  config: Config;
  relatedStories: Story[];
  infiniteScrollInlineConfig?: string;
}
