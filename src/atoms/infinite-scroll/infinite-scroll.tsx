import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { withStoryAndConfig } from "../../context";
import { InfiniteScrollTypes } from "./types";
import get from "lodash.get";
import styled from "styled-components";

export const StyledSeparator = styled.div`
  display: flex;
  justify-content: center;
  margin: ${(props) => props.theme.spacing.s} 0;
  padding: ${(props) => props.theme.spacing.s} 0;
  color: ${(props) => props.theme.color.mono5};
  border: ${(props) => `1px solid ${props.theme.color.mono3}`};
`;

export const InfiniteScrollBase = ({ story, config, children, inlineConfig, ...props }: InfiniteScrollTypes) => {
  const { "story-content-id": storyId } = story;
  const { "sketches-host": host } = config.publisherConfig;
  const jsonConfigUrl = `${host}/amp/api/v1/amp-infinite-scroll?story-id=${storyId}`;
  const infiniteScrollRender = get(config, ["opts", "render", "infiniteScrollRender"], null);
  const storySeparatorText = get(
    config,
    ["opts", "featureConfig", "infiniteScroll", "storySeparatorText"],
    "SCROLL FOR NEXT"
  );

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
        <div separator="true">
          <StyledSeparator>
            <div>{storySeparatorText}</div>
          </StyledSeparator>
        </div>
        {children}
      </amp-next-page>
    </Fragment>
  );
};

/**
 * Infinite Scroll:
 * In order to enable infinite scroll in amp pages, there needs to be a collection created with slug `amp-infinite-scroll`. The stories from this collection power the infinite scroll.
 * Please note that stories behind hard paywall (i.e. which have story.access === `subscription`) are not shown in infinite scroll.
 * Infinite scroll can be disabled by deleting the collection having slug `amp-infinite-scroll`.
 *
 * The text for the separator that separates two stories in an infinite scroll can be customized. Pass the text of your choice to opts.featureConfig.infiniteScroll.storySeparatorText.
 *
 * If you wish to override infinite scroll content, you can do so using the `infiniteScrollRender` render prop. See opts tutorial for more info.
 *
 * @category Atoms
 * @module InfiniteScroll
 * @component
 */

export const InfiniteScroll = withStoryAndConfig(InfiniteScrollBase);
