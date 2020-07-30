import React, { Fragment } from "react";
import { ImageTypes, AmpImgPropTypes } from "./types";
import { focusedImagePath } from "../../helpers/image-helpers";
import { withConfig } from "../../context";
import { LightboxGallery } from "../lightbox-gallery";
import { Helmet } from "react-helmet";

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
  prefetchImage,
  ...rest
}: ImageTypes) => {
  const cdnImage = config.publisherConfig["cdn-image"];
  if (!slug || !cdnImage) throw new Error("Required attributes missing, cant render image");
  let imgAspectRatio = aspectRatio || [16, 9];
  if (metadata && metadata.width && metadata.height) imgAspectRatio = [metadata.width, metadata.height];
  const path = focusedImagePath({ opts, slug, metadata, imgAspectRatio, cdnImage });
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

  const imageComponent = lightbox ? (
    <Fragment>
      <LightboxGallery />
      <amp-img {...value} lightbox={lightbox} />
    </Fragment>
  ) : (
    <amp-img {...value} />
  );

  return prefetchImage ? (
    <Fragment>
      <Helmet>
        <link rel="preconnect dns-prefetch" href={path} crossorigin="anonymous" />
      </Helmet>
      {imageComponent}
    </Fragment>
  ) : (
    imageComponent
  );
};

export const Image = withConfig(BaseImage);
