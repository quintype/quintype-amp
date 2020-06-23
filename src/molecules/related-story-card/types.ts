import { Story } from "../../types/story";

export interface RelatedStoryCardTypes {
  story: Story;
  fallbackSrc: string;
  aspectRatio: number[];
}

export interface ImageForStoryTypes {
  metadata: ImageMetadata | null;
  s3Key: string | null;
  aspectRatio: number[];
  altText: string | null;
  fallbackSrc: string | null;
}

interface ImageMetadata {
  width: number;
  height: number;
}
