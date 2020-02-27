import React, { useContext } from "react";
import Image from "../../atoms/image";
import { StoryContext } from "../../context/storyContext";
import { Story } from "../../types/story";
import { HeroImageTypes, HeroImageBaseTypes } from "./types"
import styled from "styled-components";

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
  z-index: ${(props) => props.theme.zindex.z100};

  @media (min-width: ${props => props.theme.breakpoints.desktop}px) {
    max-height: 130px;
  }
`;

export const HeroImage = (props: HeroImageTypes) => {
  const storyFromContext = useContext(StoryContext) as Story;
  return <HeroImageBase story={storyFromContext} {...props} />;
};

export const HeroImageBase = ({ story, attribution, slug, metadata, caption }: HeroImageBaseTypes ) => {
  const {
    "hero-image-attribution": ATTRIBUTION,
    "hero-image-s3-key": SLUG,
    "hero-image-metadata": METADATA,
    "hero-image-caption": CAPTION
  } = story;
  return (
    <div>
      <Image
        alt={caption || CAPTION!}
        metadata={metadata || METADATA!}
        slug={slug || SLUG!}
        aspectRatio={[1200, 750]}
        attribution={attribution || ATTRIBUTION!}
      />
      <StyledFigcaption>{caption || attribution || CAPTION || ATTRIBUTION}</StyledFigcaption>
    </div>
  );
};
