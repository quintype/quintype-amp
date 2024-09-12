import React from "react";
import { HeroImageBaseTypes } from "./types";
import { HeroImageMetadata } from "../../types/story";
import styled from "styled-components";
import { withStoryAndConfig } from "../../context";
import { Image } from "../../atoms";
import get from "lodash.get";

const StyledCaption = styled.span`
  margin-right: 8px;
  color: ${(props) => props.theme.color.mono6};
  line-height: ${(props) => props.theme.font.lineHeight.level3};
  font-size: ${(props) => props.theme.font.size.xxs};
  word-wrap: break-word;
`;

const StyledAttribution = styled.span`
  color: ${(props) => props.theme.color.mono4};
  font-size: ${(props) => props.theme.font.size.xxs};
  line-height: ${(props) => props.theme.font.lineHeight.level3};
  word-wrap: break-word;
`;
const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.color.mono2};
`;
const StyledFigcaption = styled.div`
  text-align: left;
  padding-top: 8px;
`;
export const HeroImageBase = ({ story, config }: HeroImageBaseTypes) => {
  const metadata: HeroImageMetadata = get(story, "hero-image-metadata", null);
  const slug: string | null = get(story, "hero-image-s3-key", null);
  if (!slug || !metadata) return null;

  const attribution: string | null = get(story, "hero-image-attribution", null);
  const caption: string | null = get(story, "hero-image-caption", null);
  const altText: string | null = get(story, "hero-image-alt-text", null);
  const disableImgPreload = get(config, ["opts", "optimizeAmpHtml"], true);

  return (
    <>
      <StyledDiv>
        <Image
          data-hero="true"
          metadata={metadata}
          slug={slug}
          alt={altText || caption || attribution || ""}
          disableImgPreload={disableImgPreload}></Image>
      </StyledDiv>
      <StyledFigcaption>
        {caption && <StyledCaption dangerouslySetInnerHTML={{ __html: `${caption}` + "&nbsp;" }} />}
        {attribution && <StyledAttribution dangerouslySetInnerHTML={{ __html: `${attribution}` }} />}
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
