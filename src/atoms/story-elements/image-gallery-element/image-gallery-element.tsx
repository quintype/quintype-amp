import React from "react";
import { StoryElementProps } from "../types";

const ImageGalleryElement = ({ element, ...props }: StoryElementProps) => {
  return <p {...props}>This is Image gallery element</p>;
};

export { ImageGalleryElement };
