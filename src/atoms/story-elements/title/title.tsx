import React from "react";
import { StoryElementProps } from "../types";
import styled from "styled-components";
import { CommonRenderPropTypes } from "../../../types/config";
import { withStoryAndConfig } from "../../../context";

export const StyledTitle = styled.h3.attrs(({ style }: StoryElementProps) => ({
  style
}))`
  font-size: ${(props) => props.theme.font.size.l};
  font-weight: ${(props) => props.theme.font.weight.bold};
  line-height: ${(props) => props.theme.font.lineHeight.level6};
  margin: 0;
  text-transform: uppercase;
`;

export const TitleBase = ({ element, inlineStyles, story, config }: StoryElementProps & CommonRenderPropTypes) => {
  return config.opts && config.opts.titleElementRender ? (
    config.opts.titleElementRender({ story, config })
  ) : (
    <StyledTitle style={inlineStyles}>{element.text}</StyledTitle>
  );
};
export const Title = withStoryAndConfig(TitleBase);
