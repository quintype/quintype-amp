import { StoryElement, Story } from "../../types/story";
import { Config } from "../../types/config";

export interface StoryElementProps {
  element: StoryElement;
  style?: { [key: string]: string };
  story?: Story;
  config?: Config;
}
