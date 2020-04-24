import { CSSObject, DefaultTheme } from "styled-components";

export interface FooterTypes {
  text?: string;
  children?: JSX.Element[] | JSX.Element | React.ReactChildren | React.ReactChild;
  style?: (props) => CSSObject;
  theme?: DefaultTheme;
}
