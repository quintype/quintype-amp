import { ReactElement } from "react";

export interface HamburgerMenuTypes {
  align: "left" | "right";
  textDirection: string;
  items: MenuItem[];
  children?: JSX.Element[] | JSX.Element | ReactElement | HTMLElement;
}

interface MenuItem {
  title: string;
  url: string;
}
