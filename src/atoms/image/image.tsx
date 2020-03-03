import React, { useContext } from "react";
import { ImageTypes, AmpImgPropTypes } from "./types";
import { ConfigContext } from "../../context/config-context";
import { Config } from "../../types/config";
import { focusedImagePath, calculateImgHeight } from "../../helper-functions";

export const Image = (props: ImageTypes) => {
  const config = useContext(ConfigContext) as Config;
  return <BaseImage {...props} config={config} />;
};

export const BaseImage = ({
  metadata,
  width,
  height,
  slug,
  aspectRatio,
  alt,
  layout = "responsive",
  opts,
  config,
  ...rest
}: ImageTypes & { config: Config }) => {
  const { cdn_image } = config;
  if (!slug || !cdn_image) throw new Error("Required attributes missing, cant render image");
  const path = focusedImagePath({ opts, slug, metadata, aspectRatio, cdn_image });
  const value: AmpImgPropTypes = {
    src: path,
    alt,
    layout,
    ...rest
  };
  switch (layout) {
    case "fixed-height":
      value.width = "";
      value.height = height;
      break;
    case "fixed" || "intrinsic":
      value.width = width;
      value.height = height;
      break;
    case "nodisplay" || "fill" || "flex-item":
      value.height = "";
      value.width = "";
    case "responsive":
      value.width = metadata.width.toString();
      value.height = calculateImgHeight(aspectRatio, metadata.width);
  }

  return <amp-img {...value}></amp-img>;
};
