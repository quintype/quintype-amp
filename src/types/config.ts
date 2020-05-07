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
    items: MenuItemTypes[];
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
  title: string;
  url: string;
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
