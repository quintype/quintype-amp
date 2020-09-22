import React from "react";
import { HeroImageBaseTypes } from "./types";
import { HeroImageMetadata } from "../../types/story";
import styled from "styled-components";
import { media } from "../../utils/media";
import { withStoryAndConfig } from "../../context";
import { LightboxGallery } from "../../atoms";
import { focusedImagePath } from "../../helpers";
import get from "lodash.get";
import { AmpImgPropTypes } from "../../atoms/image/types";

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

export const HeroImageBase = ({ story, config }: HeroImageBaseTypes) => {
  const metadata: HeroImageMetadata = get(story, "hero-image-metadata", null);
  const slug: string | null = get(story, "hero-image-s3-key", null);
  if (!slug || !metadata) return null;

  const attribution: string | null = get(story, "hero-image-attribution", null);
  const caption: string | null = get(story, "hero-image-caption", null);
  const imgAspectRatio = metadata && metadata.width && metadata.height ? [metadata.width, metadata.height] : [16, 9];
  const imgSrc = focusedImagePath({
    slug,
    metadata,
    imgAspectRatio,
    cdnImage: config.publisherConfig["cdn-image"]
  });
  const figcaptionText = getFigcaptionText(caption, attribution);

  const ampImgProps: AmpImgPropTypes = {
    width: imgAspectRatio[0].toString(),
    height: imgAspectRatio[1].toString(),
    src: imgSrc,
    layout: "responsive",
    alt: caption || attribution || "",
    lightbox: "true"
  };

  return (
    <div>
      <LightboxGallery />
      <amp-img {...ampImgProps} data-hero="true">
        {figcaptionText && <StyledFigcaption dangerouslySetInnerHTML={{ __html: figcaptionText || "" }} />}
      </amp-img>
    </div>
  );
};

/**
 * HeroImage Component is a wrapper around the <amp-img> amp component. It even serves figure caption text which picks up "hero-image-attribution" and/or "hero-image-caption" depending which one is available.
 *
 * @category Molecules
 * @component
 */

export const HeroImage = withStoryAndConfig(HeroImageBase);

export function getFigcaptionText(caption, attribution) {
  if (caption && attribution) return `${caption} | ${attribution}`;
  else if (caption || attribution) return `${caption || attribution}`;
  else return false;
}
