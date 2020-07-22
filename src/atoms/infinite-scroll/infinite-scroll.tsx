import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { withStoryAndConfig } from "../../context";
import { InfiniteScrollTypes } from "./types";
import get from "lodash.get";

export const InfiniteScrollBase = ({ story, config, children, inlineConfig, ...props }: InfiniteScrollTypes) => {
  const { "story-content-id": storyId } = story;
  const { "sketches-host": host } = config.publisherConfig;
  const jsonConfigUrl = `${host}/amp/api/v1/amp-infinite-scroll?story-id=${storyId}`;
  const infiniteScrollRender = get(config, ["opts", "render", "infiniteScrollRender"], null);

  if (infiniteScrollRender) return infiniteScrollRender({ story, config, inlineConfig });
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
        <script type="application/json" dangerouslySetInnerHTML={{ __html: inlineConfig }} />
        {children}
      </amp-next-page>
    </Fragment>
  );
};

export const InfiniteScroll = withStoryAndConfig(InfiniteScrollBase);
