import React, { Fragment } from "react";
import { ImageTypes, AmpImgPropTypes } from "./types";
import { focusedImagePath } from "../../helpers";
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
  preloadImage,
  ...rest
}: ImageTypes) => {
  const cdnImage = config.publisherConfig["cdn-image"];
  if (!slug || !cdnImage) throw new Error("Required attributes missing, cant render image");
  let imgAspectRatio = aspectRatio || [16, 9];
  if (metadata && metadata.width && metadata.height) imgAspectRatio = [metadata.width, metadata.height];

  const srcSmall = focusedImagePath({ opts, slug, metadata, imgAspectRatio, cdnImage, width: "960" });
  const srcBig = focusedImagePath({ opts, slug, metadata, imgAspectRatio, cdnImage, width: "1200" });
  const srcset = `${srcSmall} 1000w, ${srcBig} 1200w`;

  const value: AmpImgPropTypes = {
    src: srcSmall,
    srcset,
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

  return preloadImage ? (
    <Fragment>
      <Helmet>
        <link rel="preload" as="image" href={srcSmall} media="(max-width: 1000px)" crossorigin="anonymous" />
        <link rel="preload" as="image" href={srcBig} media="(min-width: 1001px)" crossorigin="anonymous" />
      </Helmet>
      {imageComponent}
    </Fragment>
  ) : (
    imageComponent
  );
};

export const Image = withConfig(BaseImage);
