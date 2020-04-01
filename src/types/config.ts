export interface Config {
  publisherConfig: PublisherConfig;
  ampConfig: AMPConfig;
}

export interface PublisherConfig {
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
  ads: {
    "top-ad": object;
    "story-ad": object;
    "bottom-ad": object;
    "bottom-sticky-ad": object;
    [key: string]: object;
  };
  "google-client-id-api": boolean;
  "invalid-elements-strategy": string;
  "google-analytics-tracking-id": string;
}
