import React from "react";
import { StoryElementProps } from "../types";
import { ImageGalleryTypes } from "./types";
import { Carousel } from "../../carousel";
import { Image } from "../../image";
import styled from "styled-components";

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
  const imageGallery = element.metadata && element.metadata.type === "gallery";
  const images =
    element["story-elements"] &&
    element["story-elements"].map((image) => (
      <Image
        key={image["id"]}
        metadata={image["image-metadata"]}
        slug={image["image-s3-key"]}
        aspectRatio={aspectRatio}
        alt={image.title}
        lightbox={imageGallery ? "imageGallery" : false}
      />
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
