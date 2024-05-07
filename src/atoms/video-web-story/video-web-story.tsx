import React, { Fragment } from "react";
import Helmet from "react-helmet";
import atob from "atob-utf-8";
import { withConfig } from "../../context";

const getVideoData = (videoElement) => {
  const videoElementType = videoElement.type;
  let videoUrl = "";
  let format = "";
  if (videoElementType === "jsembed") {
    videoUrl = atob(`${videoElement["embed-js"]}`);
    format = videoUrl.split(".")[3];
  } else if (videoElementType === "video") {
    videoUrl = videoElement?.["video-url"] || videoElement?.["metadata"]?.["video-clip-url"];
    const splittedURL = videoUrl?.split("/");
    const videoName = splittedURL?.[splittedURL.length - 1]?.split(".");
    format = videoName?.[videoName.length - 1];
  }
  return { videoUrl, format };
};

export const VideoWebStoryBase = ({ config, videoElement, imageElement, heroImage }) => {
  const { videoUrl, format } = getVideoData(videoElement);
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
