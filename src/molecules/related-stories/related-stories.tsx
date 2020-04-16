import React from "react";
import styled from "styled-components";
import { RelatedStoryCard } from "../related-story-card";
import { Story } from "../../types/story";

const RelatedStoriesWrapper = styled.div``;

export const RelatedStories = (props) => {
  const stories: Story[] = props.stories;
  return (
    <RelatedStoriesWrapper>
      {stories.map((story: Story) => (
        <RelatedStoryCard key={story.id} story={story} />
      ))}
    </RelatedStoriesWrapper>
  );
};
