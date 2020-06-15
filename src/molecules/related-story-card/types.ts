import { Story } from "../../types/story";

export interface RelatedStoryCardTypes {
  story: Story;
  fallbackSrc: string;
  aspectRatio: number[];
  anchorInlineStyles?: object;
  headlineInlineStyles?: object;
  wrapperInlineStyles?: object;
}

export interface ImageForStoryTypes {
  metadata: ImageMetadata | null;
  s3Key: string | null;
  aspectRatio: number[];
  altText: string | null;
  fallbackSrc: string | null;
  inlineStyles?: object;
}

interface ImageMetadata {
  width: number;
  height: number;
}
