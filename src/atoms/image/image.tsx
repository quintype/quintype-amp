import React, { Fragment } from "react";
import { ImageTypes, AmpImgPropTypes } from "./types";
import { getImgSrcAndSrcset } from "../../helpers";
import { withConfig } from "../../context";
import { LightboxGallery } from "../lightbox-gallery";
import { base64FallbackImage } from "../../helpers/image-helpers";
import { Head } from "../index";
import get from "lodash.get";

export const BaseImage = ({
  metadata,
  slug,
  aspectRatio = [16, 9],
  alt,
  opts = {},
  config,
  lightbox = true,
  story,
  useFallbackImage = false,
  disableImgPreload = false,
  ...rest
}: ImageTypes) => {
  const cdnImage = config.publisherConfig["cdn-image"];
  const imgAspectRatio: string[] = aspectRatio.map((el) => el.toString());

  const imgAttrs: AmpImgPropTypes = {
    alt,
    ...rest
  };

  if (slug) {
    const { src, srcset } = getImgSrcAndSrcset({
      opts,
      slug: metadata ? slug : encodeURIComponent(slug),
      metadata,
      aspectRatio: imgAspectRatio,
      cdnImage,
      story
    });
    imgAttrs.src = src;
    imgAttrs.srcset = srcset;
  } else if (useFallbackImage) {
    imgAttrs.src = base64FallbackImage;
    imgAttrs.alt = "fallback image";
  }
  if (!imgAttrs.src) return null;
  const isHeroImage: boolean = get(imgAttrs, ["data-hero"], "false") === "true";
  const imgSrc = get(imgAttrs, ["src"]);
  imgAttrs.layout = "responsive";
  imgAttrs.width = imgAspectRatio[0];
  imgAttrs.height = imgAspectRatio[1];

  return (
    <Fragment>
      {isHeroImage && !disableImgPreload && imgSrc ? (
        <Head>
          <link rel="preload" as="image" href={imgSrc} fetchPriority="high" />
          <style>{`
          .hero-image img{
            object-fit: contain;
          }
        `}</style>
        </Head>
      ) : (
        <Head>
          <style>{`
          .hero-image img{
            object-fit: contain;
          }
        `}</style>
        </Head>
      )}
      {lightbox ? (
        <Fragment>
          <LightboxGallery />
          <amp-img class="hero-image" {...imgAttrs} lightbox={lightbox} />
        </Fragment>
      ) : (
        <amp-img class="hero-image" {...imgAttrs} />
      )}
    </Fragment>
  );
};

/**
 *
 * Image atom. Publishers are advised not to use this atom, since the API might change. For internal use
 *
 * @param {Object} params required. The params object
 * @param {Object | null} params.metadata required (can be null). Story element metadata. if present, metadata.width and metadata.height are used to calculate image width and height
 * @param {String | null} params.slug required (can be null). Pass the image s3-key here. If falsy, fallback image is displayed
 * @param {Number[]} params.aspectRatio optional. If not passed defaults to 16:9
 * @param {String} params.alt required. Alt text for image
 * @param {Object} params.opts optional. This object is passed to quintype-js FocusedImage while calculating image src
 * @param {Boolean} params.lightbox optional. Used to enable/disable amp lightbox on image. Defaults to true
 * @param {Boolean} params.useFallbackImage optional. False by default. If true, it will show a fallback image of specified aspectRatio or 16:9
 * @param {any} params.rest optional. Any other props are passed down to the <amp-img> component
 *
 * @category Atoms
 * @component
 */
export const Image = withConfig(BaseImage);
