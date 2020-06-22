import { StoryElement, Story } from "../../types/story";
import { Config } from "../../types/config";
import { DefaultTheme } from "styled-components";

export interface StoryElementProps {
  element: StoryElement;
  story?: Story;
  config?: Config;
  inlineStyles?: object;
  style?: object;
  theme?: object;
}

export interface StoryElementInlineStyles {
  inlineStyles?: object;
  theme?: DefaultTheme;
}
