import React, { Fragment } from "react";
import styled from "styled-components";
import { RelatedStoryCard } from "../related-story-card";
import { RelatedStoriesTypes } from "./types";
import { withStoryAndConfig } from "../../context";
import { Spacer } from "../../atoms";
import get from "lodash.get";
import { StoryPageSlots } from "../../molecules/slots";

const { RelatedStoryCardSlot } = StoryPageSlots;

export const Heading = styled.h2`
  font-size: ${(props) => props.theme.font.size.l};
`;

export const RelatedStoriesBase = ({ story, config, heading = "Also Read" }: RelatedStoriesTypes) => {
  const relatedStories = get(config, ["opts", "featureConfig", "relatedStories", "stories"], null);
  if (!relatedStories || !relatedStories.length) return null;
  const relatedStoriesRender = get(config, ["opts", "render", "relatedStoriesRender"], null);
  if (relatedStoriesRender) return relatedStoriesRender({ relatedStories, config, story });
  return (
    <Fragment>
      <Spacer token="m" />
      <Heading>{heading}</Heading>
      <div>
        {relatedStories.map((relatedStory, idx) => (
          <Fragment key={relatedStory.id}>
            <RelatedStoryCard story={relatedStory} />
            <RelatedStoryCardSlot story={story} config={config} index={idx} relatedStory={relatedStory} />
          </Fragment>
        ))}
      </div>
    </Fragment>
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
