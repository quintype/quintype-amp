export interface HamburgerMenuTypes {
  align: "left" | "right";
  textDirection: "ltr" | "rtl";
  items: MenuItemType[];
}

export type MenuItemType = MenuItemPlaceholder | MenuItemLink | MenuItemDefault;

// export interface MenuItemTypes {
//   item: MenuItem[];
// }

interface MenuItemBase {
  "tag-name": string | null;
  "entity-properties": string | null;
  "collection-id": number | null;
  "entity-slug": string | null;
  "item-id": number | null;
  rank: number;
  title: string;
  "section-slug": string | null;
  "tag-slug": string | null;
  id: number;
  "parent-id": number | null;
  "entity-name": string | null;
  "collection-slug": string | null;
  "section-name": string | null;
  "child-items"?: MenuItemType[];
}

export interface MenuItemPlaceholder extends MenuItemBase {
  url: null;
  "item-type": "placeholder";
  data: {
    color: string;
  };
}
export interface MenuItemLink extends MenuItemBase {
  "item-type": "link";
  url: string;
  data: {
    color: string;
    link: string;
  };
}
export interface MenuItemDefault extends MenuItemBase {
  "item-type": string;
  url: string;
  data: {
    color: string;
  };
}
