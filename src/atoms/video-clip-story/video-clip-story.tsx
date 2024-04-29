import React, { Fragment } from "react";
import { withConfig } from "../../context";
import Helmet from "react-helmet";

const VideoClipStoryBase = ({ videoClipElement }) => {
  const videoUrl = videoClipElement?.["video-url"];
  const splittedURL = videoUrl?.split("/");
  const videoName = splittedURL?.[splittedURL.length - 1]?.split(".");
  const format = videoName?.[videoName.length - 1];
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js" />
      </Helmet>
      <amp-story-grid-layer template="fill">
        <amp-video autoplay="" height="720" width="480" layout="responsive">
          <source src={videoUrl} type={`video/${format}`} />
        </amp-video>
      </amp-story-grid-layer>
    </Fragment>
  );
};

export const VideoClipStory = withConfig(VideoClipStoryBase);
