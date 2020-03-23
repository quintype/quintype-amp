import { Story } from "../../types/story";
import { AMPConfig, PublisherConfig } from "../../types/config";

export interface AmpifyStoryTypes {
  story: Story;
  ampConfig: AMPConfig;
  publisherConfig: PublisherConfig;
  opts?: {
    templates?: object;
    slots?: object;
  };
}
