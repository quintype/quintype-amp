export interface Config {
  publisherConfig: PublisherConfig;
  ampConfig: AMPConfig;
}

export interface PublisherConfig {
  asset_host?: string;
  "cdn-name": string;
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
    "top-ad": {
      width: number;
      height: number;
      "unit-path": string;
    };
    "body-ad": {
      width: number;
      height: number;
      "unit-path": string;
    };
    "bottom-ad": {
      width: number;
      height: number;
      "unit-path": string;
    };
  };
  "google-client-id-api": boolean;
  "invalid-elements-strategy": string;
  "google-analytics-tracking-id": string;
}
