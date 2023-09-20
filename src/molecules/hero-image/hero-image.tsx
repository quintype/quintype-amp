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
  color: ${(props) => props.theme.color.black};
  line-height: ${(props) => props.theme.font.lineHeight.level1};
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

const StyledAttributionText = styled.div`
   font-weight: bold;
`;
const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.color.mono2};
`;

export const HeroImageBase = ({ story }: HeroImageBaseTypes) => {
  const metadata: HeroImageMetadata = get(story, "hero-image-metadata", null);
  const slug: string | null = get(story, "hero-image-s3-key", null);
  if (!slug || !metadata) return null;

  const attribution: string | null = get(story, "hero-image-attribution", null);
  const caption: string | null = get(story, "hero-image-caption", null);

  return (
    <StyledDiv>
      <Image data-hero="true" metadata={metadata} slug={slug} alt={caption || attribution || ""}>
      </Image>
       <StyledWrapper>
          {caption && <StyledText dangerouslySetInnerHTML={{ __html: `${caption}` }} />}
          {attribution && <StyledAttributionText dangerouslySetInnerHTML={{ __html: `${attribution}` }} />}
        </StyledWrapper>
    </StyledDiv>
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
