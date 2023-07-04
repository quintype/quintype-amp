import { Common } from "../../../atoms/common-types";
import { Config } from "../../../types/config";
import { Story, StoryElement } from "../../../types/story";

interface BrightcoveStoryElement extends Omit<StoryElement, "url"> {
  url?: string | null | undefined;
}
export interface BrightcoveElementTypes {
  story: Story;
  config: Config;
  element: BrightcoveStoryElement;
}

export interface DefaultBrightcoveElementTypes extends Common {
  element: BrightcoveStoryElement;
}
