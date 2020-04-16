import React from "react";
import { StoryElementProps } from "../types";
import get from "lodash.get";
import styled from "styled-components";
import { Spacer } from "../../spacer";
import { withStoryAndConfig } from "../../../context";

const StyledAlsoRead = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.font.size.m};
  span {
    font-weight: bold;
  }
  a {
    color: ${(props) => props.theme.color.primaryColor};
  }

  a:hover {
    text-decoration: none;
  }
`;

export const BaseAlsoRead = ({ element, story }: StoryElementProps) => {
  const linkedStoryId = get(element, ["metadata", "linked-story-id"]);
  const linkedStory = get(story, ["linked-stories", linkedStoryId]);

  if (!linkedStory) {
    return null;
  }

  return (
    <StyledAlsoRead>
      <Spacer token="m" align="horizontal" />
      <span>Also read: </span>
      <Spacer token="s" align="horizontal" />
      <a href={linkedStory.url}>{linkedStory.headline}</a>
      <Spacer token="m" align="horizontal" />
    </StyledAlsoRead>
  );
};

export const AlsoRead = withStoryAndConfig(BaseAlsoRead);