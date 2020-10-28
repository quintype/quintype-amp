import React, { Fragment } from "react";
import styled from "styled-components";
import { RelatedStoryCard } from "../related-story-card";
import { RelatedStoriesTypes } from "./types";
import { withStoryAndConfig } from "../../context";
import { base64FallbackImage } from "../../helpers/image-helpers";
import { Layout, Spacer } from "../../atoms";
import get from "lodash.get";
import { StoryPageSlots } from "../../molecules/slots";

const { RelatedStoryCardSlot } = StoryPageSlots;

export const Heading = styled.h2`
  font-size: ${(props) => props.theme.font.size.l};
`;

export const RelatedStoriesBase = ({
  story,
  config,
  heading = "Also Read",
  aspectRatio = [16, 9]
}: RelatedStoriesTypes) => {
  const relatedStories = get(config, ["opts", "featureConfig", "relatedStories", "stories"], null);
  if (!relatedStories || !relatedStories.length) return null;
  const relatedStoriesRender = get(config, ["opts", "render", "relatedStoriesRender"], null);
  if (relatedStoriesRender) return relatedStoriesRender({ relatedStories, config, story });
  return (
    <>
      {relatedStories.map((relatedStory, idx) => (
        <>
          <amp-story-page id={relatedStory.id}>
            {/* <amp-story-grid-layer template="vertical">
              <Layout story={story} config={config}>
                <Spacer token="m" />
                <Heading>{heading}</Heading>
              </Layout>
            </amp-story-grid-layer> */}
            <amp-story-grid-layer template="vertical">
              <Layout story={story} config={config}>
                <RelatedStoryCard
                  story={relatedStory}
                  fallbackSrc={get(config, ["ampConfig", "fallback-image-url"], base64FallbackImage)}
                  aspectRatio={aspectRatio}
                />
              </Layout>
            </amp-story-grid-layer>
          </amp-story-page>
          {/* <RelatedStoryCardSlot story={story} config={config} index={idx} relatedStory={relatedStory} /> */}
        </>
      ))}
    </>
  );
};

/**
 * RelatedStories Component uses the RelatedStoryCard molecule component internally.
 *
 * ```js
 * <RelatedStories stories={relatedStories} />
 * ```
 *
 * @param {Object} props Object containing parameters passed to the render prop
 * @param {Object} props.stories Required. It takes in related stories object.
 * @param {Object} props.config config object
 * @param {Object} props.heading Optional. A String which serves as a title for this collection. If not passed, defaults to "Also Read" text.
 * @param {Object} props.aspectRatio Optional. An Array of width and height. If not passed, defaults to [16,9].
 *  @category Molecules
 * @component
 */

export const RelatedStories = withStoryAndConfig(RelatedStoriesBase);
