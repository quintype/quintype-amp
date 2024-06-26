export interface Story {
  seo: SEO;
  "assignee-id": number;
  "author-name": string;
  tags: Tag[];
  headline: string;
  "storyline-id": string | null;
  votes: any;
  "story-content-id": string;
  slug: string;
  "linked-stories"?: any;
  "last-published-at": number;
  subheadline: string | null;
  sections: Section[];
  "read-time": number;
  "access-level-value": string | null;
  "content-created-at": number;
  "owner-name": string;
  "custom-slug": string | null;
  "push-notification": any | null;
  "publisher-id": number;
  "hero-image-metadata": HeroImageMetadata | null;
  comments: any | null;
  "word-count": number;
  entities: any;
  "published-at": number;
  "is-live-blog"?: boolean;
  "breaking-news-linked-story-id": any | null;
  "storyline-title": any | null;
  summary: any | null;
  "push-notification-title": any | null;
  "external-id": any | null;
  "canonical-url": any | null;
  autotags: any[];
  "linked-entities"?: any[];
  status: string;
  "hero-image-attribution": string | null;
  "bullet-type": string;
  "hero-image-alt-text"?: string | null;
  id: string;
  "hero-image-s3-key": string | null;
  contributors: any[] | null;
  "associated-series-collection-ids"?: any[];
  cards: Card[];
  url: string;
  "story-version-id": string;
  "content-type": string;
  "content-updated-at": number;
  "author-id": number;
  "owner-id": number;
  "linked-story-ids": string[];
  access: string | null;
  "asana-project-id"?: any | null;
  "first-published-at": number;
  "hero-image-caption": string | null;
  version: number;
  "story-template": StoryTemplate | string;
  "sequence-no": number | null;
  "created-at": number;
  authors: Author[];
  metadata: StoryMetadata;
  "publish-at": number | null;
  "assignee-name": string;
  alternative: {};
  "last-correction-published-at"?: number;
  "updated-at": number;
  "is-amp-supported"?: boolean;
  "task-id"?: string;
  "cta-title"?: string;
  "cta-url"?: string;
  "open-in-new-tab"?: boolean;
  "no-follow"?: boolean;
}

export interface Author {
  id: number;
  social?: string | null;
  name: string;
  slug: string;
  "avatar-url": string | null;
  "avatar-s3-key": string | null;
  "twitter-handle": any | null;
  bio: any | null;
  "contributor-role": ContributorRole | null;
}

export interface ContributorRole {
  id: number;
  name: string;
}

export interface Card {
  "story-elements": StoryElement[];
  "card-updated-at": number;
  "content-version-id": string;
  "card-added-at": number;
  status: string;
  id: string;
  "content-id": string;
  version: number;
  metadata: CardMetadata;
}

export interface CardMetadata {
  "social-share"?: SocialShare;
  attributes?: any;
  "external-id"?: string;
}

export interface SocialShare {
  shareable: boolean;
  title: string;
  message: string | null;
  image: Image | null;
}

export interface Image {
  key: string | null;
  url: string | null;
  attribution: string | null;
  caption: string | null;
  metadata: HeroImageMetadata | null;
  "alt-text"?: string | null;
}

export interface HeroImageMetadata {
  width: number;
  height: number;
  "mime-type"?: string;
  "file-size"?: number;
  "file-name"?: string;
  "focus-point"?: number[];
}

export interface StoryElement {
  description?: string;
  "embed-js"?: string;
  "page-url"?: string;
  url?: string | undefined;
  "image-metadata"?: object | null;
  "image-attribution"?: string;
  "alt-text"?: string;
  "image-s3-key"?: string;
  "embed-url"?: string;
  type: string;
  "family-id"?: string;
  title?: string;
  id: string;
  metadata?: StoryElementMetadata | null;
  "file-name"?: string;
  "s3-key"?: string;
  "content-type"?: string;
  subtype: null | string;
  text?: string;
  "story-elements"?: StoryElement[];
  data?: StoryElementData | null;
  "file-type"?: string;
}
interface StoryElementData {
  content: string;
  "content-type": string;
}

export interface StoryElementMetadata {
  "linked-story-id"?: string;
  "linked-story"?: LinkedStory;
  "facebook-url"?: string;
  provider?: string;
  "post-id"?: string;
  "tweet-url"?: string;
  "tweet-id"?: string;
  "instagram-url"?: string;
  "instagram-id"?: string | null;
  content?: string;
  attribution?: string;
  "file-size"?: number;
  "dailymotion-url"?: string;
  "video-id"?: string;
  "vidible-video-id"?: string;
  "duration-millis"?: number;
  "player-url"?: string;
  "include-in-video-sitemap"?: boolean;
  type?: string;
  "original-url"?: string;
  question?: string;
  answer?: string;
  "has-header"?: boolean;
  "cta-title"?: string;
  "cta-url"?: string;
  "open-in-new-tab"?: boolean;
  "no-follow"?: boolean;
  "account-id"?: string;
  "player-id"?: string;
  "player-media"?: string;
  "embed-code"?: string;
}
export interface LinkedStory {
  headline: string;
  "story-content-id": string;
  "highlighted-text": string;
  id: string;
  "highlighted-headline": string | null;
}

export enum StoryTemplate {
  Text = "text"
}

export interface Section {
  "domain-slug": string | null;
  slug: string;
  name: string;
  "section-url": string;
  id: number;
  "parent-id": string | number | null;
  "display-name": string;
  collection: Collection | null;
  data: any | null;
}

export interface Collection {
  slug: string;
  name: string;
  id: number;
}

export interface StoryMetadata {
  "sponsored-by"?: string;
  "card-share": CardShare;
  "module-id"?: string;
  theme?: string;
  "imported-card-id"?: string;
  "story-attributes"?: any;
  "is-closed"?: boolean;
}

export interface CardShare {
  shareable: boolean;
}

export interface Tag {
  id: number;
  name: string;
  "meta-description"?: string | null;
  "meta-title"?: string | null;
  slug: string;
  "tag-type": string;
  type?: string;
  "entity-type-id"?: number;
  properties?: any;
}

export interface SEO {
  "meta-keywords"?: string[];
  "meta-title"?: string;
  "meta-description"?: string;
  "claim-reviews"?: any;
}
