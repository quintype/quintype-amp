export interface Config {
  publisherConfig: PublisherConfig;
  ampConfig: AMPConfig;
}

export interface PublisherConfig {
  "cdn-name": string;
  "text-direction": "ltr" | "rtl";
  "publisher-name": string;
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
  "google-client-id-api": boolean;
  "invalid-elements-strategy": string;
  "google-analytics-tracking-id": string;
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
