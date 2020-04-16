import React, { Fragment } from "react";
import styled from "styled-components";
import { RelatedStoryCard } from "../related-story-card";
import { Story } from "../../types/story";
import { media } from "../../utils/media";

const RelatedStoryCards = styled.div`
  display: flex;
  flex-direction: column;

  ${media.laptop`
    flex-direction: row;
	`}
`;
const Heading = styled.h2`
  font-size: ${(props) => props.theme.font.size.m};
  border-bottom: 1px solid ${(props) => `${props.theme.color.black}60`};
  padding-bottom: 3px;
`;

export const RelatedStories = (props) => {
  const stories: Story[] = props.stories;
  return (
    <Fragment>
      <Heading>Related Stories</Heading>
      <RelatedStoryCards>
        {stories.map((story: Story) => (
          <RelatedStoryCard key={story.id} story={story} />
        ))}
      </RelatedStoryCards>
    </Fragment>
  );
};
