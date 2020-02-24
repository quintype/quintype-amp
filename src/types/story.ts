export interface Story {
  "updated-at": number;
  seo: SEO;
  "assignee-id": number;
  "author-name": string;
  tags: Tag[];
  headline: string;
  "storyline-id": string | null;
  votes: any;
  "story-content-id": string;
  slug: string;
  "linked-stories": any;
  "last-published-at": number;
  subheadline: string;
  sections: Section[];
  "read-time": number;
  "access-level-value": null;
  "content-created-at": number;
  "owner-name": string;
  "custom-slug": string;
  "push-notification": null;
  "publisher-id": number;
  "hero-image-metadata": HeroImageMetadata;
  comments: null;
  "word-count": number;
  entities: any;
  "published-at": number;
  "is-live-blog": boolean;
  "breaking-news-linked-story-id": null;
  "storyline-title": null;
  summary: null;
  "push-notification-title": null;
  "external-id": null;
  "canonical-url": null;
  "is-amp-supported": boolean;
  autotags: any[];
  "linked-entities": any[];
  status: string;
  "hero-image-attribution": string;
  "bullet-type": string;
  id: string;
  "hero-image-s3-key": string;
  contributors: null;
  "associated-series-collection-ids": any[];
  cards: Card[];
  url: string;
  "story-version-id": string;
  "content-type": string;
  "content-updated-at": number;
  "author-id": number;
  "owner-id": number;
  "linked-story-ids": string[];
  access: string;
  "asana-project-id": null;
  "first-published-at": number;
  "hero-image-caption": null;
  version: number;
  "story-template": StoryTemplate;
  "sequence-no": number | null;
  "created-at": number;
  authors: Author[];
  metadata: StoryMetadata;
  "publish-at": number | null;
  "assignee-name": string;
  alternative: {};
}

export interface Author {
  id: number;
  name: string;
  slug: string;
  "avatar-url": string;
  "avatar-s3-key": string;
  "twitter-handle": null;
  bio: null;
  "contributor-role": null;
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
  "social-share": SocialShare;
  attributes: any;
}

export interface SocialShare {
  shareable: boolean;
  title: string;
  message: null;
  image: Image;
}

export interface Image {
  key: string;
  url: null;
  attribution: string;
  caption: null;
  metadata: HeroImageMetadata;
}

export interface HeroImageMetadata {
  width: number;
  height: number;
  "mime-type": string;
  "file-size": number;
  "file-name": string;
  "focus-point": number[];
}

export interface StoryElement {
  description: string;
  "page-url": string;
  type: string;
  "family-id": string;
  title: string;
  id: string;
  metadata: StoryElementMetadata;
  subtype: null | string;
  text: string;
}

export interface StoryElementMetadata {
  "linked-story-id"?: string;
  "linked-story"?: LinkedStory;
}

export interface LinkedStory {
  headline: string;
  "story-content-id": string;
  "highlighted-text": string;
  id: string;
  "highlighted-headline": null;
}

export enum StoryTemplate {
  Text = "text"
}

export interface Section {
  "domain-slug": null;
  slug: string;
  name: string;
  "section-url": string;
  id: number;
  "parent-id": null;
  "display-name": string;
  collection: Collection;
  data: null;
}

export interface Collection {
  slug: string;
  name: string;
  id: number;
}

export interface StoryMetadata {
  "sponsored-by": string;
  "card-share": CardShare;
}

export interface CardShare {
  shareable: boolean;
}

export interface Tag {
  id: number;
  name: string;
  "meta-description": null;
  "meta-title": null;
  slug: string;
  "tag-type": string;
}

export interface SEO {
  "meta-keywords": string[];
  "meta-title": string;
  "meta-description": string;
  "claim-reviews": any;
}
