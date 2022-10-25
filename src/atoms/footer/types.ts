import { CSSObject, DefaultTheme } from "styled-components";
import { Config } from "../../types/config";

export interface FooterTypes {
  text?: string;
  children?: JSX.Element[] | JSX.Element | React.ReactChildren | React.ReactChild;
  style?: (props) => CSSObject;
  showPoweredByQt?: boolean | (() => boolean);
  config?: Config;
  theme?: DefaultTheme;
}
