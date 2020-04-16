import React, { Fragment } from "react";
import styled from "styled-components";
import { RelatedStoryCard } from "../related-story-card";
import { media } from "../../utils/media";
import { RelatedStoriesTypes } from "./types";

const RelatedStoryCards = styled.div`
  display: flex;
  flex-direction: column;

  ${media.laptop`
    flex-direction: row;
	`}
`;
export const Heading = styled.h2`
  font-size: ${(props) => props.theme.font.size.m};
  border-bottom: 1px solid ${(props) => `${props.theme.color.black}60`};
  padding-bottom: 3px;
`;

export const RelatedStories = ({ stories }: RelatedStoriesTypes) => {
  return (
    <Fragment>
      <Heading>Related Stories</Heading>
      <RelatedStoryCards>
        {stories.map((story) => (
          <RelatedStoryCard key={story.id} story={story} />
        ))}
      </RelatedStoryCards>
    </Fragment>
  );
};
