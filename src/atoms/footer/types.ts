import { CSSObject, DefaultTheme } from "styled-components";
import { Config } from "../../types/config";
import { Collection, Story } from "../../types/story";

export interface FooterTypes {
  text?: string;
  children?: JSX.Element[] | JSX.Element | React.ReactChildren | React.ReactChild;
  style?: (props) => CSSObject;
  showPoweredByQt?: boolean | ((config) => boolean);
  config?: Config;
  theme?: DefaultTheme;
  story?: Story;
  collection?: Collection;
}
