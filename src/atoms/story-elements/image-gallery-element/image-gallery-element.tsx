import React from "react";
import { StoryElementProps } from "../types";
import { Common } from "../../common-types";
import { Carousel } from "../../carousel";
import { Image } from "../../image";

type ImageGalleryElementProps = StoryElementProps & Common;
const ImageGalleryElement = ({
  element,
  height = "300",
  width = "500",
  layout = "responsive",
  type,
  ...props
}: ImageGalleryElementProps) => {
  const aspectRatio = [16, 9];
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
  return (
    <>
      <Carousel height={height} width={width} layout={layout} type="gallery" {...props}>
        {images}
      </Carousel>
      <p>Image gallery</p>
    </>
  );
};

export { ImageGalleryElement };
