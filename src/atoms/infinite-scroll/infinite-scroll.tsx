import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { withStoryAndConfig } from "../../context";

const InfiniteScrollBase = ({ story }) => {
  const { "story-content-id": storyId } = story;
  // const { "sketches-host": host } = config.publisherConfig;
  // const jsonConfigUrl = `${host}/amp/api/v1/amp-infinite-scroll?story-id=${storyId}`;
  const jsonConfigUrl = `https://vikatan-gamma.quintype.io/amp/api/v1/amp-infinite-scroll?story-id=${storyId}`; // dont do this
  return (
    <Fragment>
      <Helmet>
        <script
          async={undefined}
          custom-element="amp-next-page"
          src="https://cdn.ampproject.org/v0/amp-next-page-1.0.js"
        />
      </Helmet>
      <amp-next-page src={jsonConfigUrl} />
    </Fragment>
  );
};

export const InfiniteScroll = withStoryAndConfig(InfiniteScrollBase);
