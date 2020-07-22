import { Common } from "../../../atoms/common-types";
import { Config } from "../../../types/config";
import { Story, StoryElement } from "../../../types/story";

export interface YoutubeElementTypes {
  story: Story;
  config: Config;
  element: StoryElement;
}

export interface DefaultYoutubeElementTypes extends Common {
  element: StoryElement;
}
