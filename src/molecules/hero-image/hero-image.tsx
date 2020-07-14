import React from "react";
import { Image } from "../../atoms";
import { HeroImageBaseTypes } from "./types";
import styled from "styled-components";
import { media } from "../../utils/media";
import { withStoryAndConfig } from "../../context";

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

export const HeroImageBase = ({ story, attribution, slug, metadata, caption }: HeroImageBaseTypes) => {
  let overRideStory = false;
  let figcaptionText: string | undefined | boolean;
  const imageProps: any = {};
  const imageAttribution = story["hero-image-attribution"] || story["hero-image-caption"] || "";
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
      <Image {...imageProps} alt={imageAttribution}>
        {figcaptionText && <StyledFigcaption dangerouslySetInnerHTML={{ __html: figcaptionText || "" }} />}
      </Image>
    </div>
  );
};

function heroImageAbsent(story) {
  return story["hero-image-s3-key"] === null;
}

/**
 * HeroImage Component uses the "Image" atomic component internally. It even serves figure caption text which picks up "hero-image-attribution" and/or "hero-image-caption" depending which one is available.
 *
 * ```js
 * <HeroImage
 *  caption="<p>Congress, AAP and AIMIM leaders</p>"
 *  attribution="<span>custom attribution</span>"
 *  slug="quintype/2020-02/0ecdae82-a09e-47a9-9249-d8d1380e0de8/quintype_blog_HC.jpg"
 * />
 * ```
 *
 * @param {Object} props Object containing parameters passed to the render prop
 * @param {String} props.alt Optional. A String of alternate text or image caption.
 * @param {Object} props.metadata Optional. An object containing width, height, "mime-type", "file-size", "file-name"and "focus-point" parameters.
 * @param {String} props.slug Optional. A String which is a part of URL.
 * @param {String} props.attribution Optional. A String which is the image caption.
 *  @category Molecules
 * @component
 */

export const HeroImage = withStoryAndConfig(HeroImageBase);

export function getFigcaptionText(caption, attribution) {
  if (caption && attribution) return `${caption} | ${attribution}`;
  else if (caption || attribution) return `${caption || attribution}`;
  else return false;
}
