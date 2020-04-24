import { ReactElement } from "react";
import { DefaultTheme, CSSObject } from "styled-components";

export interface HamburgerMenuTypes {
  align: "left" | "right";
  textDirection: "ltr" | "rtl";
  items: MenuItem[];
  children?: JSX.Element[] | JSX.Element | ReactElement | HTMLElement;
  style?: CustomStyles;
  theme?: DefaultTheme;
}

interface MenuItem {
  title: string;
  url: string;
}

interface CustomStyles {
  list?: (theme) => CSSObject;
  listItem?: (theme) => CSSObject;
  listItemAnchor?: (theme) => CSSObject;
}
