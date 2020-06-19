import React from "react";
import styled, { css } from "styled-components";
import { StoryElementProps } from "../../types";
import { withStoryAndConfig } from "../../../../context";
import { CommonRenderPropTypes } from "../../../../types/config";
import { TextProps } from "../types";

export const StyledQuestion = styled.p<StoryElementProps & TextProps>`
  color: ${(props) => props.theme.color.mono7};
  line-height: ${(props) => props.theme.font.lineHeight.level2};
  font-weight: ${(props) => props.theme.font.weight.bold};
  ${(props) =>
    props.element.subtype === "question" &&
    (props.style && props.style.question ? props.style.question : baseQuestionStyles)}
`;

const baseQuestionStyles = css`
  color: ${(props) => props.theme.color.mono7};
  line-height: ${(props) => props.theme.font.lineHeight.level2};
  font-weight: ${(props) => props.theme.font.weight.bold};
`;

export const QuestionBase = ({ element, story, config }: StoryElementProps & CommonRenderPropTypes) => {
  return config.opts && config.opts.storyElementRender && config.opts.storyElementRender.questionElementRender ? (
    config.opts.storyElementRender.questionElementRender({ story, config })
  ) : (
    <StyledQuestion
      element={element}
      story={story}
      config={config}
      as="p"
      dangerouslySetInnerHTML={{ __html: element.text || "" }}
    />
  );
};
export const Question = withStoryAndConfig(QuestionBase);
