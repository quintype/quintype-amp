import React, { Fragment } from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import { withStoryAndConfig } from "../../../context";
import { WebStoryTypes } from "./types";

export const WebStoryBase = ({ story, config, children }: WebStoryTypes) => {
  const publisherLogo =
    get(config, ["publisherConfig", "publisher-settings", "publisher-logo", "url"], null) ||
    get(config, ["ampConfig", "logo-url"], null);
  return (
    <Fragment>
      <Helmet>
        <script async={undefined} custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" />
      </Helmet>
      <amp-story
        data-test-id="visual-story"
        standalone=""
        title={story.headline}
        publisher={get(config, ["publisherConfig", "publisher-settings", "title"], "")}
        publisher-logo-src={publisherLogo}
        poster-portrait-src={`//${config.publisherConfig["cdn-image"]}/${story["hero-image-s3-key"]}?w=640&mode=crop&ar=3:4`}>
        {children}
      </amp-story>
    </Fragment>
  );
};

export const WebStory = withStoryAndConfig(WebStoryBase);
