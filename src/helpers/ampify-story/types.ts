import { Story } from "../../types/story";
import { RelatedStories } from "../../types/related-stories";
import { AMPConfig, PublisherConfig } from "../../types/config";

export interface AmpifyStoryTypes {
  story: Story;
  relatedStories: RelatedStories;
  ampConfig: AMPConfig;
  publisherConfig: PublisherConfig;
  opts?: {
    templates?: object;
    slots?: object;
  };
}
