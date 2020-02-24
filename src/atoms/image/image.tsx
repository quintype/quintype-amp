import React from "react";
import { ImageTypes } from "./types";
import Quintype from "quintype-js";

export const Image = ({ metadata, slug, aspectRatio, layout = "responsive", opts }: ImageTypes) => {
  // cdnImage => should come from context, specifics tbd
  const { width } = metadata;
  const path = focusedImagePath({ opts, slug, metadata, aspectRatio, cdnImage });

  return (
    <amp-img
      src={path}
      alt={alt}
      layout={layout}
      width={width}
      height={calculateHeight(aspectRatio, width)}
      {...rest}></amp-img>
  );
};

function focusedImagePath({ opts, slug, metadata, aspectRatio, cdnImage }) {
  let auto = ["format"];
  const supportsCompression = !/\.gif/.test(slug);
  if (supportsCompression) auto = auto.concat(["compress"])
  opts = Object.assign({ auto }, opts)
  const path = new Quintype.FocusedImage(slug, metadata).path(aspectRatio, opts);
  const stripProtocol = (url: string) => url.replace(/^(http|https):/, "");
  return `${stripProtocol(cdnImage)}/${path}`;
}

function calculateHeight(aspectRatio, width) {
  return (width / aspectRatio).toString();
}

export default Image;
