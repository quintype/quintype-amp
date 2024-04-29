import React, { Fragment } from "react";
import { withConfig } from "../../context";
import Helmet from "react-helmet";

const VideoClipStoryBase = ({ config, videoClipElement, imageElement, heroImage }) => {
  const videoUrl = videoClipElement?.["video-url"];
  const splittedURL = videoUrl?.split("/");
  const videoName = splittedURL?.[splittedURL.length - 1]?.split(".");
  const format = videoName?.[videoName.length - 1];
  const poster = imageElement
    ? `https://${config.publisherConfig["cdn-image"]}/${imageElement["image-s3-key"]}`
    : `https://${config.publisherConfig["cdn-image"]}/${heroImage["hero-image-s3-key"]}`;
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js" />
      </Helmet>
      <amp-story-grid-layer template="fill">
        <amp-video autoplay="" height="720" width="480" poster={poster} layout="responsive">
          <source src={videoUrl} type={`video/${format}`} />
        </amp-video>
      </amp-story-grid-layer>
    </Fragment>
  );
};

/**
 *
 * VideoClipStory atom. Provides video clip support for web stories
 *
 * @param {Object} params required. The params object
 * @param {Object} params.videoClipElement required. video clip element of the story card
 * @param {Object} params.imageElement required. image element to show as a poster
 *
 * @category Atoms
 * @component
 */

export const VideoClipStory = withConfig(VideoClipStoryBase);
