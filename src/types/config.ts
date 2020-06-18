import { Story } from "./story";

export interface Config {
  publisherConfig: PublisherConfig;
  ampConfig: AMPConfig;
  opts?: ConfigOpts;
}

export interface PublisherConfig {
  "sketches-host": string;
  facebook: FBConfig;
  "cdn-name": string;
  "text-direction": "ltr" | "rtl";
  "publisher-name": string;
  env: string;
  "publisher-id": number;
  "publisher-settings"?: object;
  sections?: [];
}

interface FBConfig {
  "app-id": string;
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
  "related-collection-id": number;
  "infinite-scroll-collection-id": number;
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
    "india-data-center": boolean;
  };
  "comscore-tracking-vars"?: {
    c1?: number;
    c2?: number;
  };
  chartbeat?: {
    uid?: string;
    domain?: string;
    useCanonical?: boolean;
    sections?: string;
    authors?: string;
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

export interface MenuItemTypes {
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

interface SlotsTypes {
  story?: {
    "top-slot"?: (props: CommonRenderPropTypes) => any;
    "bottom-slot"?: (props: CommonRenderPropTypes) => any;
  };
}

export interface ConfigOpts {
  templates?: object;
  slots?: SlotsTypes;
  headerCardRender?: (props: CommonRenderPropTypes) => any;
  relatedStoriesRender?: (props: RelatedStoriesRenderPropTypes) => any;
  infiniteScrollRender?: (props: InfiniteScrollRenderPropTypes) => any;
}

export interface CommonRenderPropTypes {
  story: Story;
  config: Config;
}
interface RelatedStoriesRenderPropTypes {
  relatedStories: Story[];
  config: Config;
  story: Story;
}

interface InfiniteScrollRenderPropTypes {
  story: Story;
  config: Config;
  inlineConfig: string;
}
