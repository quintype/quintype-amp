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
  "cdn-image": string;
  "text-direction": "ltr" | "rtl";
  "publisher-name": string;
  env: string;
  "publisher-id": number;
  "publisher-settings"?: object;
  domains: DomainsTypes[];
  sections?: [];
}

interface DomainsTypes {
  name: string;
  slug: string;
  "host-url": string;
  "beta-host-url": string | null;
  "home-collection-id": number;
  "section-ids": number[];
  "menu-groups": number[];
}

interface FBConfig {
  "app-id": string;
}

interface Colors {
  primary?: string;
  secondary?: string;
  "footer-background"?: string;
  "footer-text-color"?: string;
  "header-background"?: string;
  "section-text-color"?: string;
}

export interface AMPConfig {
  menu: {
    enabled: boolean;
  };
  "related-collection-id": number;
  "infinite-scroll-collection-id": number;
  "menu-groups"?: {
    [menuGroup: string]: MenuGroupItemsTypes;
  } | null;
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

export interface MenuGroupItemsTypes {
  id: number;
  slug: string;
  name: string;
  items: MenuItemTypes[];
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
    "icon-code"?: string;
  };
}

interface SlotsTypes {
  story?: {
    "top-slot"?: (props: CommonRenderPropTypes) => any;
    "bottom-slot"?: (props: CommonRenderPropTypes) => any;
  };
}

export interface ConfigOpts {
  domainSlug?: string | null;
  templates?: object;
  slots?: SlotsTypes;
  render?: {
    headerCardRender?: (props: CommonRenderPropTypes) => any;
    relatedStoriesRender?: (props: RelatedStoriesRenderPropTypes) => any;
    infiniteScrollRender?: (props: InfiniteScrollRenderPropTypes) => any;
    storyElementRender?: {
      bigfactElementRender?: (props: CommonRenderPropTypes) => any;
      answerElementRender?: (props: CommonRenderPropTypes) => any;
      questionElementRender?: (props: CommonRenderPropTypes) => any;
      summaryElementRender?: (props: CommonRenderPropTypes) => any;
      textElementRender?: (props: CommonRenderPropTypes) => any;
      youtubeElementRender?: (props: CommonRenderPropTypes) => any;
      vidibleElementRender?: (props: CommonRenderPropTypes) => any;
      twitterElementRender?: (props: CommonRenderPropTypes) => any;
      titleElementRender?: (props: CommonRenderPropTypes) => any;
      instagramElementRender?: (props: CommonRenderPropTypes) => any;
      imageGalleryElementRender?: (props: CommonRenderPropTypes) => any;
      imageElementRender?: (props: CommonRenderPropTypes) => any;
      facebookElementRender?: (props: CommonRenderPropTypes) => any;
      embedRender?: (props: CommonRenderPropTypes) => any;
      dailyMotionRender?: (props: CommonRenderPropTypes) => any;
      blockquoteRender?: (props: CommonRenderPropTypes) => any;
      blurbRender?: (props: CommonRenderPropTypes) => any;
      alsoReadRender?: (props: CommonRenderPropTypes) => any;
    };
  };
  featureConfig?: FeatureConfigTypes;
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

interface FeatureConfigTypes {
  infiniteScroll?: {
    infiniteScrollInlineConfig: string;
    storySeparatorText?: string;
  };
  relatedStories?: {
    stories: Story[];
  };
  liveBlog?: {
    dataPollInterval?: string;
    dataMaxItemsPerPage?: string;
  };
  enableAds?: {
    default?: {
      top?: boolean;
      body?: boolean;
      bottom?: boolean;
    };
    liveBlog?: {
      top?: boolean;
      body?: boolean;
      bottom?: boolean;
    };
  };
  langTag?: {
    [key: string]: string;
  };
  sidebarMenu?: {
    menuGroupSlug?: string;
  };
}
