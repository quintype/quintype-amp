import React from "react";
import { HeroImageBaseTypes } from "./types";
import { HeroImageMetadata } from "../../types/story";
import styled from "styled-components";
import { media } from "../../utils/media";
import { withStoryAndConfig } from "../../context";
import { Image } from "../../atoms";
import get from "lodash.get";

const StyledWrapper = styled.figcaption`
  display: flex;
  align-items: center;
  text-align: left;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px 0;
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

const StyledText = styled.div`
  margin: 0 8px;
`;

export const HeroImageBase = ({ story }: HeroImageBaseTypes) => {
  const metadata: HeroImageMetadata = get(story, "hero-image-metadata", null);
  const slug: string | null = get(story, "hero-image-s3-key", null);
  if (!slug || !metadata) return null;

  const attribution: string | null = get(story, "hero-image-attribution", null);
  const caption: string | null = get(story, "hero-image-caption", null);

  return (
    <div>
      <Image data-hero="true" metadata={metadata} slug={slug} alt={caption || attribution || ""}>
        <StyledWrapper>
          {caption && <StyledText dangerouslySetInnerHTML={{ __html: `${caption}` }} />}
          {caption && attribution && <span>|</span>}
          {attribution && <StyledText dangerouslySetInnerHTML={{ __html: `${attribution}` }} />}
        </StyledWrapper>
        )
      </Image>
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
