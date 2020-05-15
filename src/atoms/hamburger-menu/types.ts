import { ReactElement } from "react";

export interface HamburgerMenuTypes {
  align: "left" | "right";
  textDirection: "ltr" | "rtl";
  items: MenuItem[];
  children?: JSX.Element[] | JSX.Element | ReactElement | HTMLElement;
}

interface MenuItem {
  "tag-name": string | null;
  "entity-properties": string | null;
  "collection-id": number | null;
  "entity-slug": string | null;
  "item-id": number | null;
  rank: number;
  title: string;
  "item-type": string | null;
  "section-slug": string | null;
  "tag-slug": string | null;
  id: number;
  "parent-id": number | null;
  url: string;
  "entity-name": string | null;
  "collection-slug": string | null;
  "section-name": string | null;
  data?: {
    color: string;
    link?: string;
  };
}
