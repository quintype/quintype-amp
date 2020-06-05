import React, { Fragment } from "react";
import { ImageTypes, AmpImgPropTypes } from "./types";
import { Config } from "../../types/config";
import { focusedImagePath } from "../../helpers/image-helpers";
import { withConfig } from "../../context";
import { LightboxGallery } from "../lightbox-gallery";
import styled from "styled-components";

const StyledImage = styled.div.attrs(({ inlineStyles }: StyledImageTypes) => ({
  style: inlineStyles
}))<StyledImageTypes>``;
export interface StyledImageTypes {
  inlineStyles?: object;
}
export const BaseImage = ({
  metadata,
  width,
  height,
  slug,
  aspectRatio,
  alt,
  layout = "responsive",
  opts = {},
  config,
  lightbox = true,
  inlineStyles,
  ...rest
}: ImageTypes & { config: Config }) => {
  const cdnName = config.publisherConfig["cdn-name"];
  if (!slug || !cdnName) throw new Error("Required attributes missing, cant render image");
  let imgAspectRatio = aspectRatio || [16, 9];
  if (metadata && metadata.width && metadata.height) imgAspectRatio = [metadata.width, metadata.height];
  const path = focusedImagePath({ opts, slug, metadata, imgAspectRatio, cdnName });
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
      value.width = imgAspectRatio[0].toString();
      value.height = imgAspectRatio[1].toString();
  }

  return lightbox ? (
    <Fragment>
      <LightboxGallery />
      <StyledImage inlineStyles={inlineStyles}>
        <amp-img {...value} lightbox={lightbox} />
      </StyledImage>
    </Fragment>
  ) : (
    <StyledImage inlineStyles={inlineStyles}>
      <amp-img {...value} />
    </StyledImage>
  );
};

export const Image = withConfig(BaseImage);
