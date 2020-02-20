import React from "react";
import { ImageTypes } from "./types";

export const Image = ({ src, alt, layout = "responsive", ...rest }: ImageTypes) => {
  return <amp-img src={src} alt={alt} layout={layout} {...rest}></amp-img>;
};

export default Image;
