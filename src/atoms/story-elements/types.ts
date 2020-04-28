import { StoryElement, Story } from "../../types/story";
import { Config } from "../../types/config";
import { DefaultTheme, CSSObject } from "styled-components";

export interface StoryElementProps {
  element: StoryElement;
  // style?: { [key: string]: string };
  style?: CustomStyles;
  theme?: DefaultTheme;
  story?: Story;
  config?: Config;
  children?: JSX.Element[] | JSX.Element | React.ReactChildren | React.ReactChild;
}

interface CustomStyles {
  summary?: (theme) => CSSObject;
  answer?: (theme) => CSSObject;
  blurb?: (theme) => CSSObject;
}
