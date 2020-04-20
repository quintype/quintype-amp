import { Story } from "../../types/story";
import { RelatedStories } from "../../types/related-stories";
import { AMPConfig, PublisherConfig, ConfigOpts } from "../../types/config";

export interface AmpifyStoryTypes {
  story: Story;
  relatedStories: RelatedStories;
  ampConfig: AMPConfig;
  publisherConfig: PublisherConfig;
  opts?: ConfigOpts;
}
