import React, { Fragment } from "react";
import styled from "styled-components";
import { RelatedStoryCard } from "../related-story-card";
import { RelatedStoriesTypes } from "./types";
import { withConfig } from "../../context";
import { base64FallbackImage } from "../../helpers/image-helpers";
import { Spacer } from "../../atoms";
import get from "lodash.get";

export const Heading = styled.h2`
  font-size: ${(props) => props.theme.font.size.l};
`;

export const RelatedStoriesBase = ({ stories, config, heading, aspectRatio = [16, 9] }: RelatedStoriesTypes) => {
  return stories && stories.length ? (
    <Fragment>
      <Spacer token="m" />
      <Heading>{heading || "Also Read"}</Heading>
      <div>
        {stories.map((story) => (
          <RelatedStoryCard
            key={story.id}
            story={story}
            fallbackSrc={get(config, ["ampConfig", "fallback-image-url"], base64FallbackImage)}
            aspectRatio={aspectRatio}
          />
        ))}
      </div>
    </Fragment>
  ) : null;
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

export const RelatedStories = withConfig(RelatedStoriesBase);
