import React, { useContext } from "react";
import Image from "../../atoms/image";
import { StoryContext } from "../../context/storyContext";
import { Story } from "../../types/story";
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

export const HeroImage = () => {
  const storyFromContext = useContext(StoryContext) as Story;
  return <HeroImageBase story={storyFromContext} />;
};

export const HeroImageBase = ({ story }) => {
  const {
    "hero-image-attribution": attribution,
    "hero-image-s3-key": slug,
    "hero-image-metadata": metadata,
    "hero-image-caption": caption
  } = story;
  return (
    <div>
      <Image alt={caption} metadata={metadata} slug={slug} aspectRatio={[1200, 750]} attribution={attribution} />
      <StyledFigcaption>{caption}</StyledFigcaption>
    </div>
  );
};
