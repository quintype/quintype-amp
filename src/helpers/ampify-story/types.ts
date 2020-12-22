import { Story } from "../../types/story";
import { AMPConfig, PublisherConfig, ConfigOpts, PBConfig } from "../../types/config";

export interface AmpifyStoryTypes {
  story: Story;
  ampConfig: AMPConfig;
  publisherConfig: PublisherConfig;
  pbConfig?: PBConfig;
  seo?: string;
  opts?: ConfigOpts;
}
