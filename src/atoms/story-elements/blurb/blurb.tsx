import React from "react";
import { StoryElementProps } from "../types";
import styled from "styled-components";
import { CommonRenderPropTypes } from "../../../types/config";
import { withStoryAndConfig } from "../../../context";

const StyledBlurb = styled.blockquote.attrs(({ style }: StoryElementProps & { style?: object }) => ({
  style: style
}))`
  font-size: ${(props) => props.theme.font.size.m};
  color: ${(props) => props.theme.color.mono7};
  margin: 0 ${(props) => props.theme.spacing.s};
  line-height: ${(props) => props.theme.font.lineHeight.level3};
  border-left: 3px solid ${(props) => props.theme.color.mono7};
  padding: 0 ${(props) => props.theme.spacing.m};

  // Applies when rendering direct html, fallback case
  blockquote {
    margin: 0 ${(props) => props.theme.spacing.s};
  }
`;

export const DefaultBlurb = ({ element, inlineStyles }: StoryElementProps) => {
  if (element.metadata && element.metadata.content) {
    return <StyledBlurb style={inlineStyles}>{element.metadata.content}</StyledBlurb>;
  }
  return <StyledBlurb style={inlineStyles} as="div" dangerouslySetInnerHTML={{ __html: element.text || "" }} />;
};

export const BlurbBase = ({ element, story, config }: StoryElementProps & CommonRenderPropTypes) => {
  return config.opts && config.opts.storyElementRender ? (
    config.opts.storyElementRender({ story, config })
  ) : (
    <DefaultBlurb element={element} story={story} config={config} />
  );
};

export const Blurb = withStoryAndConfig(BlurbBase);
