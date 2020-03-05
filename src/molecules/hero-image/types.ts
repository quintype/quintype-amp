import { HeroImageMetadata, Story } from "../../types/story";

export interface HeroImageTypes {
  attribution?: string | null;
  slug?: string;
  caption?: string | null;
  metadata?: HeroImageMetadata;
}

export interface HeroImageBaseTypes {
  story: Story;
  attribution?: string | null;
  slug?: string;
  caption?: string | null;
  metadata?: HeroImageMetadata;
}
