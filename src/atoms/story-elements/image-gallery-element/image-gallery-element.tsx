import React from "react";
import { StoryElementProps } from "../types";
import { ImageGalleryTypes } from "./types";
import { Carousel } from "../../carousel";
import { Image } from "../../image";
import styled from "styled-components";
import { media } from "../../../utils/media";

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

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
type ImageGalleryElementProps = StoryElementProps & ImageGalleryTypes;
const ImageGalleryElement = ({
  element,
  height = "750",
  width = "1200",
  layout = "responsive",
  aspectRatio = [16, 9],
  type,
  lightbox,
  ...props
}: ImageGalleryElementProps) => {
  // forcing imageGallery to false for now for vikatan.
  const imageGallery = element.metadata && element.metadata.type === "gallery" && false;
  const images =
    element["story-elements"] &&
    element["story-elements"].map((image) => (
      <Image
        key={image["id"]}
        metadata={image["image-metadata"]}
        slug={image["image-s3-key"]}
        aspectRatio={aspectRatio}
        alt={image.title}
        lightbox={imageGallery ? "imageGallery" : false}>
        {getFigcaptionText(image.title, image["image-attribution"]) && (
          <StyledFigcaption>{getFigcaptionText(image.title, image["image-attribution"])}</StyledFigcaption>
        )}
      </Image>
    ));
  const storyElements = element["story-elements"] && element["story-elements"].length >= 1;
  return (
    <>
      {storyElements &&
        (imageGallery ? (
          <StyledGallery>{images}</StyledGallery>
        ) : (
          <Carousel height={height} width={width} layout={layout} type="slides" {...props}>
            {images}
          </Carousel>
        ))}
    </>
  );
};

export { ImageGalleryElement };

export function getFigcaptionText(caption, attribution) {
  if (caption && attribution) return `${caption}`;
  else if (caption || attribution) return `${caption || attribution}`;
  else return false;
}
