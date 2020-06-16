import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { withStoryAndConfig } from "../../context";
import { InfiniteScrollTypes } from "./types";

const InfiniteScrollBase = ({ story, config, children, ...props }: InfiniteScrollTypes) => {
  const { "story-content-id": storyId } = story;
  const { "sketches-host": host } = config.publisherConfig;
  const jsonConfigUrl = `${host}/amp/api/v1/amp-infinite-scroll?story-id=${storyId}`;
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-next-page"
          src="https://cdn.ampproject.org/v0/amp-next-page-1.0.js"
        />
      </Helmet>
      <amp-next-page {...props} src={jsonConfigUrl}>
        {children}
      </amp-next-page>
    </Fragment>
  );
};

export const InfiniteScroll = withStoryAndConfig(InfiniteScrollBase);
