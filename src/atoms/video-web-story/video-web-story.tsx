import React, { Fragment } from "react";
import Helmet from "react-helmet";
import atob from "atob";
import { withConfig } from "../../context";

export const VideoWebStoryBase = ({ config, videoElement, imageElement }) => {
  const videoUrl = videoElement && atob(`${videoElement["embed-js"]}`);
  const poster = imageElement ? `https://${config.publisherConfig["cdn-image"]}/${imageElement["image-s3-key"]}` : null;
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js" />
      </Helmet>
      <amp-story-grid-layer template="fill">
        <amp-video autoplay="" poster={poster} height="auto" layout="responsive">
          <source src={videoUrl} type="video/mp4" />
        </amp-video>
      </amp-story-grid-layer>
    </Fragment>
  );
};

export const VideoWebStory = withConfig(VideoWebStoryBase);
