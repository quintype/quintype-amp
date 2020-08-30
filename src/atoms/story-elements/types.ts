import { StoryElement, Story } from "../../types/story";
import { Config } from "../../types/config";

export interface StoryElementProps {
  element: StoryElement;
  story?: Story;
  config?: Config;
}
