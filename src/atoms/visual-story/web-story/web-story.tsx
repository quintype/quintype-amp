import React, { Fragment } from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import { withStoryAndConfig } from "../../../context";
import { WebStoryTypes } from "./types";

const WebStoryBase = ({ story, config, children }: WebStoryTypes) => {
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" />
      </Helmet>
      <amp-story
        standalone={undefined}
        title={story.headline}
        publisher={get(config, ["publisherConfig", "publisher-settings", "title"], "")}
        publisher-logo-src={get(config, ["publisherConfig", "publisher-settings", "publisher-logo", "url"], "")}
        poster-portrait-src={story["hero-image-s3-key"]}>
        {children}
      </amp-story>
    </Fragment>
  );
};

export const WebStory = withStoryAndConfig(WebStoryBase);
