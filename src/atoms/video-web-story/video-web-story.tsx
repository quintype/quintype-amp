import React, { Fragment } from "react";
import Helmet from "react-helmet";

export const VideoWebStory = ({ videoUrl }) => {
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js" />
      </Helmet>
      <amp-story-grid-layer template="fill">
        <amp-video
          autoplay=""
          poster="https://images.unsplash.com/photo-1662402400707-17c8d73685a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
          width="640"
          height="360"
          layout="responsive">
          <source src={videoUrl} type="video/mp4" />
        </amp-video>
      </amp-story-grid-layer>
    </Fragment>
  );
};
