export interface Config {
  publisherConfig: PublisherConfig;
  ampConfig: AMPConfig;
  opts?: ConfigOpts;
}

export interface PublisherConfig {
  "cdn-name": string;
  "text-direction": "ltr" | "rtl";
  "publisher-name": string;
  "publisher-id": number;
  "publisher-settings"?: object;
  webengage?: {
    // temporary. webengage should not come from here. remove ASAP
    "license-code": string;
    "website-url": string;
    "tracking-code": string;
  };
}

interface Colors {
  primary: string;
  secondary: string;
  "footer-background": string;
  "footer-text-color": string;
  "header-background": string;
  "section-text-color": string;
}

export interface AMPConfig {
  menu: {
    enabled: boolean;
  };
  "menu-groups"?: {
    default?: {
      id: number;
      slug: string;
      name: string;
      items: MenuItemTypes[];
    };
  };
  fonts: {
    primary: {
      url: string;
      family: string;
    };
    secondary: {
      url: string;
      family: string;
    };
  };
  colors: Colors;
  "logo-url": string;
  doubleclick: {
    "top-ad": DoubleClickAdTypes;
    "body-ad": DoubleClickAdTypes;
    "bottom-ad": DoubleClickAdTypes;
  };
  webengage?: {
    "license-code": string;
    "website-url": string;
    "tracking-code": string;
  };
  "comscore-tracking-vars"?: {
    c1?: number;
    c2?: number;
  };
  "gtm-id"?: string;
  "google-client-id-api": boolean;
  "invalid-elements-strategy": string;
  "google-analytics-tracking-id": string;
  "fallback-image-url": string;
}

interface DoubleClickAdTypes {
  width: number;
  height: number;
  "unit-path": string;
}

interface MenuItemTypes {
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

export interface SlotType {
  ampHtml: string;
  script?: string;
  styles?: string;
}
interface SlotsTypes {
  story?: {
    "top-slot"?: SlotType;
    "bottom-slot"?: SlotType;
  };
}

export interface ConfigOpts {
  templates?: object;
  slots?: SlotsTypes;
}
