import React from "react";
import { HeroImageBaseTypes } from "./types";
import { HeroImageMetadata } from "../../types/story";
import styled from "styled-components";
import { media } from "../../utils/media";
import { withStoryAndConfig } from "../../context";
import { Image } from "../../atoms";
import get from "lodash.get";
import { isGumlet } from "../../helpers";

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
  const figcaptionText = getFigcaptionText(caption, attribution);
  const imgOptsSrc = isGumlet(config) ? { w: 1200, enlarge: true, format: "auto" } : { w: 1200 };
  const imgOptsSrcset = isGumlet(config) ? { format: "auto" } : { w: 1200 };

  return (
    <div>
      <Image
        data-hero="true"
        metadata={metadata}
        slug={slug}
        alt={caption || attribution || ""}
        opts={imgOptsSrc}
        srcSetOpts={imgOptsSrcset}>
        {figcaptionText && <StyledFigcaption dangerouslySetInnerHTML={{ __html: figcaptionText || "" }} />}
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
