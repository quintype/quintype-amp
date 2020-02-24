import React, { useContext } from "react";
import { ImageTypes } from "./types";
import Quintype from "quintype-js";
import { ConfigContext } from "../../context/config-context";
import { Config } from "../../types/config";

// note: metadata.width and width are totally different!
export const Image = ({ metadata, width, height, imgSlug, aspectRatio, layout = "responsive", opts, ...rest }: ImageTypes) => {
  const config = useContext(ConfigContext) as Config;
  const { cdn_image } = config
  const path = focusedImagePath({ opts, imgSlug, metadata, aspectRatio, cdn_image });
  switch(layout) {
    case "fixed-height":
      return (<amp-img
        src={path}
        width={"auto"}
        height={height}
        layout={"fixed-height"}
        {...rest}
      ></amp-img>)
    case "fixed": 
      return (<amp-img
        src={path}
        width={width}
        height={height}
        layout={"fixed"}
        {...rest}
      ></amp-img>)
    default:
      return (<amp-img
      src={path}
      layout={layout}
      width={width || metadata.width}
      height={calculateHeight(aspectRatio, width || metadata.width)}
      {...rest}
    ></amp-img>)
  }
};

function focusedImagePath({ opts, imgSlug, metadata, aspectRatio, cdn_image }) {
  let auto = ["format"];
  const supportsCompression = !/\.gif/.test(imgSlug);
  if (supportsCompression) auto = auto.concat(["compress"])
  opts = Object.assign({ auto }, opts)
  const path = new Quintype.FocusedImage(imgSlug, metadata).path(aspectRatio, opts);
  const stripProtocol = (url: string) => url.replace(/^(http|https):/, "");
  return `${stripProtocol(cdn_image)}/${path}`;
}

function calculateHeight(aspectRatio, width) {
  const ar = aspectRatio[0]/aspectRatio[1]
  return Math.round((width / ar)).toString();
}

export default Image;
