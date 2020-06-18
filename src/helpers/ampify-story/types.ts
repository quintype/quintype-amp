import { Story } from "../../types/story";
import { AMPConfig, PublisherConfig, ConfigOpts } from "../../types/config";

export interface AmpifyStoryTypes {
  story: Story;
  relatedStories: Story[];
  ampConfig: AMPConfig;
  publisherConfig: PublisherConfig;
  seo?: string;
  opts?: ConfigOpts;
  infiniteScrollInlineConfig?: string;
}
