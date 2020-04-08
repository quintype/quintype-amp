import { Story } from "../../types/story";
import { AMPConfig, PublisherConfig, OptsTypes } from "../../types/config";

export interface AmpifyStoryTypes {
  story: Story;
  ampConfig: AMPConfig;
  publisherConfig: PublisherConfig;
  opts?: OptsTypes;
}
