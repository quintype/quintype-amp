import React, { Fragment } from "react";
import Helmet from "react-helmet";

export const VideoWebStory = ({ videoUrl, config, imageElement }) => {
  const poster = imageElement ? `https://${config.publisherConfig["cdn-image"]}/${imageElement["image-s3-key"]}` : "";
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js" />
      </Helmet>
      <amp-story-grid-layer template="fill">
        <amp-video autoplay="" poster={poster} width="640" height="360" layout="responsive">
          <source src={videoUrl} type="video/mp4" />
        </amp-video>
      </amp-story-grid-layer>
    </Fragment>
  );
};
