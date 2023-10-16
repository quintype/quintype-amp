import React from "react";
import { HeroImageBaseTypes } from "./types";
import { HeroImageMetadata } from "../../types/story";
import styled from "styled-components";
import { withStoryAndConfig } from "../../context";
import { Image } from "../../atoms";
import get from "lodash.get";

const StyledText = styled.span`
  margin-right: 8px;
  color: ${(props) => props.theme.color.mono6};
  line-height: ${(props) => props.theme.font.lineHeight.level1};
  font-size: ${(props) => props.theme.font.size.xxs};
  word-wrap: break-word;
`;

const StyledAttributionText = styled.span`
   color: ${(props) => props.theme.color.mono4};
   font-size: ${(props) => props.theme.font.size.xxs};
`;
const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.color.mono2};
`;
const StyledFigcaption = styled.div`
  text-align: left;
  padding-top: 8px;
`;
export const HeroImageBase = ({ story }: HeroImageBaseTypes) => {
  const metadata: HeroImageMetadata = get(story, "hero-image-metadata", null);
  const slug: string | null = get(story, "hero-image-s3-key", null);
  if (!slug || !metadata) return null;

  const attribution: string | null = get(story, "hero-image-attribution", null);
  const caption: string | null = get(story, "hero-image-caption", null);

  return (
   <>
      <StyledDiv>
        <Image data-hero="true" metadata={metadata} slug={slug} alt={caption || attribution || ""}>
        </Image>
      </StyledDiv>
      <StyledFigcaption>
        {caption && <StyledText dangerouslySetInnerHTML={{ __html: `${caption}` + '&nbsp;' }} />}
        {attribution && <StyledAttributionText dangerouslySetInnerHTML={{ __html: `${attribution}` }} />}
      </StyledFigcaption>
    </>
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
