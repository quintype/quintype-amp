export interface HamburgerMenuTypes {
  align: "left" | "right";
  textDirection: "ltr" | "rtl";
  items: HamburgerMenuItem[];
}

export interface HamburgerMenuItem {
  "item-type": string;
  "tag-name": string | null;
  "entity-properties": string | null;
  "collection-id": number | null;
  "entity-slug": string | null;
  "item-id": number | null;
  rank: number;
  title: string;
  url: string | null;
  "section-slug": string | null;
  "tag-slug": string | null;
  id: number;
  "parent-id": number | null;
  "entity-name": string | null;
  "collection-slug": string | null;
  "section-name": string | null;
  "child-items"?: HamburgerMenuItem[];
  data: {
    color: string;
    link?: string;
  };
}

export interface MenuItemComponentTypes {
  item: HamburgerMenuItem;
}
export interface TreeNodeComponentTypes {
  item: HamburgerMenuItem;
}

export interface SubMenuTypes {
  childItems: HamburgerMenuItem[];
}
