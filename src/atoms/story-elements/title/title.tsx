import React from "react";
import { StoryElementProps } from "../types";
import styled from "styled-components";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";
export const StyledTitle = styled.h3`
  font-size: ${(props) => props.theme.font.size.l};
  font-weight: ${(props) => props.theme.font.weight.bold};
  line-height: ${(props) => props.theme.font.lineHeight.level6};
  margin: 0;
  text-transform: uppercase;
`;

export const TitleBase = ({ element, story, config }: StoryElementProps) => {
  const titleElementRender = get(config, ["opts", "storyElementRender", "titleElementRender"], null);

  return titleElementRender ? titleElementRender({ story, config }) : <StyledTitle>{element.text}</StyledTitle>;
};
export const Title = withStoryAndConfig(TitleBase);
