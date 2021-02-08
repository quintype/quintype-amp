import { Story } from "../../types/story";
export interface RelatedStoryCardTypes {
  story: Story;
}

export interface ImageForStoryTypes {
  metadata: ImageMetadata | null;
  s3Key: string | null;
  altText: string | null;
}

interface ImageMetadata {
  width: number;
  height: number;
}
