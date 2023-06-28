import { Common } from "../../../atoms/common-types";
import { Config } from "../../../types/config";
import { Story, StoryElement } from "../../../types/story";

export interface BrightcoveElementTypes {
  story: Story;
  config: Config;
  element: StoryElement;
}

export interface DefaultBrightcoveElementTypes extends Common {
  element: StoryElement;
}
