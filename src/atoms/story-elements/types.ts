import { StoryElement, Story } from "../../types/story";
import { Config } from "../../types/config";
import { DefaultTheme, CSSObject } from "styled-components";

export interface StoryElementProps {
  element: StoryElement;
  style?: CustomStyles;
  theme?: DefaultTheme;
  story?: Story;
  config?: Config;
  children?: JSX.Element[] | JSX.Element | React.ReactChildren | React.ReactChild;
}

// interface StoryElementBase {
//   style?: CustomStyles;
//   theme?: DefaultTheme;
//   story?: Story;
//   config?: Config;
// }
// interface Typea extends StoryElementBase {
//   element: StoryElement;
//   children?: never;
// }
// interface Typeb extends StoryElementBase {
//   children: JSX.Element[] | JSX.Element | React.ReactChildren | React.ReactChild;
//   element?: never;
// }

interface CustomStyles {
  summary?: (theme) => CSSObject;
  answer?: (theme) => CSSObject;
  blurb?: (theme) => CSSObject;
}

// export type StoryElementProps = Typea | Typeb;
