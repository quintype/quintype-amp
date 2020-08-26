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

/**
 * Infinite Scroll:
 * In order to enable infinite scroll in amp pages, there needs to be a collection created with slug `amp-infinite-scroll`. The stories from this collection power the infinite scroll.
 * Please note that at this point of time, stories behind hard paywall (i.e. which have story.access === `subscription`) are not shown in infinite scroll.
 * If no such collection exists, infinite scroll is not shown and amp library does not add infinite scroll components.
 *
 * If you wish to override infinite scroll content, you can do so using the `infiniteScrollRender` render prop. See opts tutorial for more info.
 *
 * @category Atoms
 * @module InfiniteScroll
 * @component
 */

export const InfiniteScroll = withStoryAndConfig(InfiniteScrollBase);
