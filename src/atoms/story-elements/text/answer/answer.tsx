import React from "react";
import styled, { css } from "styled-components";
import { StoryElementProps } from "../../types";
import { withStoryAndConfig } from "../../../../context";
import { CommonRenderPropTypes } from "../../../../types/config";
import { TextProps } from "../types";

export const StyledAnswer = styled.p<StoryElementProps & TextProps>`
  .answer {
    color: ${(props) => props.theme.color.mono5};
  }
  ${(props) =>
    props.element.subtype === "answer" && (props.style && props.style.answer ? props.style.answer : baseAnswerStyles)}
`;

const baseAnswerStyles = css`
  color: ${(props) => props.theme.color.mono5};
`;

export const AnswerBase = ({ element, story, config }: StoryElementProps & CommonRenderPropTypes) => {
  return config.opts && config.opts.storyElementRender && config.opts.storyElementRender.answerElementRender ? (
    config.opts.storyElementRender.answerElementRender({ story, config })
  ) : (
    <StyledAnswer
      element={element}
      story={story}
      config={config}
      as="p"
      dangerouslySetInnerHTML={{ __html: element.text || "" }}
    />
  );
};
export const Answer = withStoryAndConfig(AnswerBase);
