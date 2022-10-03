import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { withStoryAndConfig } from "../../context";
import { InfiniteScrollTypes } from "./types";
import get from "lodash.get";
import styled from "styled-components";
import { getLocalizedWord } from "../../utils/localize-words/localization";

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
  const remoteEndPoint = get(
    config,
    ["opts", "featureConfig", "infiniteScroll", "remoteConfigEndpoint"],
    "/amp/api/v1/amp-infinite-scroll"
  );
  const jsonConfigUrl = `${remoteEndPoint}?story-id=${storyId}`;
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
            <div data-testid="infinite-scroll-separator">
              {getLocalizedWord(config, "infiniteScrollSeparatorText", storySeparatorText)}
            </div>
          </StyledSeparator>
        </div>
        {children}
      </amp-next-page>
    </Fragment>
  );
};

/**
 * Infinite Scroll:
  - We can enable infinite scroll in amp pages in 3 ways:
   - 1:  If `featureConfig > infiniteScroll > source` is `custom`
        * then provide an async custom function for `inlineConfig` & `remoteConfigEndpoint`
        * infiniteScroll is powered by `customFunction` response.
      - The response should be in this format for inline configurations   
         - `[
         *     {
         *       "image": "https://example.com/image.jpg",
         *       "title": "This article shows next",
         *      "url": "https://example.com/article.amp.html"
         *     },
         *     // ...
         *     ]`
     
   - Remote configurations require the server to return a JSON object with the pages key/value pair.
     - `{ pages: [
          *  {
          *    "image": "https://example.com/image.jpg",
          *    "title": "This article shows next",
          *    "url": "https://example.com/article.amp.html"
          *  }
         *  // ...
        * ]
      * }`
      
  * -  For more information, please go through `https://amp.dev/documentation/components/amp-next-page/`

  - 2: If `featureConfig > infiniteScroll > source` is `relatedStoriesApi` - infiniteScroll is powered by `relatedStoriesApi` response.
  - 3: If `featureConfig > infiniteScroll > source` is `not provided`, there needs to be a collection created with slug `amp-infinite-scroll`. The stories from this collection power the infinite scroll.
 
  * -  Please note that stories behind hard paywall (i.e. which have story.access === `subscription`) are not shown in infinite scroll.
  -  Infinite scroll can be disabled by deleting the collection having slug `amp-infinite-scroll`.
  
  * -  The text for the separator that separates two stories in an infinite scroll can be customized. Pass the text of your choice to `opts.featureConfig.infiniteScroll.storySeparatorText`.
  -  If you wish to override infinite scroll content, you can do so using the `infiniteScrollRender` render prop. See opts tutorial for more info.
 *
 * @category Atoms
 * @module InfiniteScroll
 * @component
 */

export const InfiniteScroll = withStoryAndConfig(InfiniteScrollBase);
