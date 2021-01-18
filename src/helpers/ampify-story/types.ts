import { Story } from "../../types/story";
import { AMPConfig, PublisherConfig, ConfigOpts } from "../../types/config";

export interface AmpifyStoryTypes {
  story: Story;
  ampConfig: AMPConfig;
  publisherConfig: PublisherConfig;
  additionalConfig: object | null;
  seo?: string;
  opts?: ConfigOpts;
}
