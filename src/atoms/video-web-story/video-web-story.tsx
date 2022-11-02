import React, { Fragment } from "react";
import Helmet from "react-helmet";
import atob from "atob";
import { withConfig } from "../../context";

export const VideoWebStoryBase = ({ config, videoElement, imageElement }) => {
  const videoUrl = videoElement && atob(`${videoElement["embed-js"]}`);
  const format = videoUrl.split(".")[3];
  const poster = imageElement ? `https://${config.publisherConfig["cdn-image"]}/${imageElement["image-s3-key"]}` : null;
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
 * VideoWebStory atom. Provides video support for web stories
 *
 * @param {Object} params required. The params object
 * @param {Object} params.videoElement required. video element of the story card
 * @param {Object} params.imageElement required. image element to show as a poster
 *
 * @category Atoms
 * @component
 */

export const VideoWebStory = withConfig(VideoWebStoryBase);
