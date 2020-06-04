import React from "react";
import { Image } from "../../atoms";
import { HeroImageBaseTypes } from "./types";
import styled from "styled-components";
import { media } from "../../utils/media";
import { withStoryAndConfig } from "../../context";

const StyledFigcaption = styled.figcaption.attrs(({ inlineStyles }: StyledFigcaptionTypes) => ({
  style: inlineStyles
}))<StyledFigcaptionTypes>`
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
export interface StyledFigcaptionTypes {
  inlineStyles?: object;
}
export const HeroImageBase = ({ story, attribution, slug, metadata, caption, inlineStyles }: HeroImageBaseTypes) => {
  let overRideStory = false;
  let figcaptionText: string | undefined | boolean;
  const imageProps: any = {};

  if (attribution || slug || metadata || caption) {
    overRideStory = true;
  }

  if (overRideStory) {
    imageProps.alt = caption;
    imageProps.metadata = metadata;
    imageProps.slug = slug;
    imageProps.attribution = attribution;
    figcaptionText = getFigcaptionText(caption, attribution);
  } else {
    if (heroImageAbsent(story)) return null;
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
      <Image {...imageProps}>
        {figcaptionText && <StyledFigcaption inlineStyles={inlineStyles}>{figcaptionText}</StyledFigcaption>}
      </Image>
    </div>
  );
};

function heroImageAbsent(story) {
  return story["hero-image-s3-key"] === null;
}

export const HeroImage = withStoryAndConfig(HeroImageBase);

export function getFigcaptionText(caption, attribution) {
  if (caption && attribution) return `${caption} | ${attribution}`;
  else if (caption || attribution) return `${caption || attribution}`;
  else return false;
}
