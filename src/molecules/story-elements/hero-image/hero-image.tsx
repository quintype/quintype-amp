import React, { useContext } from "react";
import Image from "../../../atoms/image";
import { StoryContext } from "../../../context/storyContext";
import { Story } from "../../../types/story";
import { HeroImageTypes, HeroImageBaseTypes } from "./types";
import styled from "styled-components";
import { media } from "../../../utils/media";

const StyledFigcaption = styled.figcaption`
  text-align: left;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  max-height: 90px;
  color: ${(props) => props.theme.color.white};
  line-height: ${(props) => props.theme.font.lineHeight.level1};
  background: ${(props) => `${props.theme.color.black}60`};
  font-size: ${(props) => props.theme.font.size.xxs};
  z-index: ${(props) => props.theme.zIndex.z100};

  ${media.laptop`
		max-height: 130px;
		overflow-y: scroll;
	`}
`;

export const HeroImage = (props: HeroImageTypes) => {
  const storyFromContext = useContext(StoryContext) as Story;
  return <HeroImageBase story={storyFromContext} {...props} />;
};

export const HeroImageBase = ({ story, attribution, slug, metadata, caption }: HeroImageBaseTypes) => {
  let overRideStory = false;
  let figcaptionText: string | undefined | boolean;
  const imageProps: any = {
    aspectRatio: [1200, 750]
  };
  if (attribution || slug || metadata || caption) overRideStory = true;
  if (overRideStory) {
    imageProps.alt = caption;
    imageProps.metadata = metadata;
    imageProps.slug = slug;
    imageProps.attribution = attribution;
    figcaptionText = getFigcaptionText(caption, attribution);
  } else {
    const {
      "hero-image-attribution": ATTRIBUTION,
      "hero-image-s3-key": SLUG,
      "hero-image-metadata": METADATA,
      "hero-image-caption": CAPTION
    } = story;
    imageProps.alt = CAPTION;
    imageProps.metadata = METADATA;
    imageProps.slug = SLUG;
    imageProps.attribution = ATTRIBUTION;
    figcaptionText = getFigcaptionText(CAPTION, ATTRIBUTION);
  }
  return (
    <div>
      <Image {...imageProps}>{figcaptionText && <StyledFigcaption>{figcaptionText}</StyledFigcaption>}</Image>
    </div>
  );
};

export function getFigcaptionText(caption, attribution) {
  if (caption && attribution) return `${caption} | ${attribution}`;
  else if (caption || attribution) return `${caption || attribution}`;
  else return false;
}
