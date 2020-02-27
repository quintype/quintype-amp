import { HeroImageMetadata, Story } from "../../types/story"

export interface HeroImageTypes {
  "attribution"?: string;
  "slug"?: string;
  "caption"?: string;
  metadata?: HeroImageMetadata;
}

export interface HeroImageBaseTypes {
  story: Story
  "attribution"?: string;
  "slug"?: string;
  "caption"?: string;
  metadata?: HeroImageMetadata;
}