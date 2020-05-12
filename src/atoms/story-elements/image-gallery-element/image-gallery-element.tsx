import React from "react";
import get from "lodash/get";
import { StoryElementProps } from "../types";
import { Carousel } from "../../carousel";
import { Image } from "../../image";

const ImageGalleryElement = ({ element, config, ...props }: StoryElementProps) => {
  const metadata = get(element, ["story-elements"]).map((ele) => ele["image-metadata"]);
  const s3key = get(element, ["story-elements"]).map((ele) => ele["image-s3-key"]);
  const aspectRatio = [16, 9];
  const caption = get(element, ["story-elements"]).map((ele) => ele.title);
  return (
    <>
      <Carousel height="300" width="500" layout="responsive" type="gallery" {...props}>
        <Image metadata={metadata} slug={s3key} aspectRatio={aspectRatio} alt={caption} />
      </Carousel>
      <p>Image gallery</p>
    </>
  );
};

export { ImageGalleryElement };
