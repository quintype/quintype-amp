import React from "react";
import { StoryElementProps } from "../types";
import { Common } from "../../common-types";
import { Carousel } from "../../carousel";
import { Image } from "../../image";

type ImageGalleryElementProps = StoryElementProps & Common;
const ImageGalleryElement = ({
  element,
  height = "750",
  width = "1200",
  layout = "responsive",
  aspectRatio = [16, 9],
  type,
  ...props
}: ImageGalleryElementProps) => {
  const images =
    element["story-elements"] &&
    element["story-elements"].map((image) => (
      <Image
        metadata={image["image-metadata"]}
        slug={image["image-s3-key"]}
        aspectRatio={aspectRatio}
        alt={image.title}
      />
    ));
  const storyElements = element["story-elements"] && element["story-elements"].length >= 1;
  return (
    <>
      {storyElements && (
        <Carousel height={height} width={width} layout={layout} type="slides" {...props}>
          {images}
        </Carousel>
      )}
    </>
  );
};

export { ImageGalleryElement };
