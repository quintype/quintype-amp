import React, { Fragment } from "react";
import styled from "styled-components";
import { RelatedStoryCard } from "../related-story-card";
import { media } from "../../utils/media";
import { RelatedStoriesTypes } from "./types";
import { withConfig } from "../../context";
import { base64FallbackImage } from "../../helpers/image-helpers";
import get from "lodash.get";

const RelatedStoryCards = styled.div`
  display: flex;
  flex-direction: column;

  ${media.laptop`
    flex-direction: row;
	`}
`;
export const Heading = styled.h2`
  font-size: ${(props) => props.theme.font.size.m};
  border-bottom: 1px solid ${(props) => props.theme.color.mono4};
  padding-bottom: 3px;
`;

export const RelatedStoriesBase = ({ stories, config, heading, aspectRatio = [16, 9] }: RelatedStoriesTypes) => {
  return stories && stories.length ? (
    <Fragment>
      <Heading>{heading || "Related Stories"}</Heading>
      <RelatedStoryCards>
        {stories.map((story) => (
          <RelatedStoryCard
            key={story.id}
            story={story}
            fallbackSrc={get(config, ["ampConfig", "fallback-image-url"], base64FallbackImage)}
            aspectRatio={aspectRatio}
          />
        ))}
      </RelatedStoryCards>
    </Fragment>
  ) : null;
};

export const RelatedStories = withConfig(RelatedStoriesBase);
