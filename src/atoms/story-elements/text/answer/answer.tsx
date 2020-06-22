import React from "react";
import styled from "styled-components";
import { StoryElementProps } from "../../types";
import { withStoryAndConfig } from "../../../../context";
import get from "lodash.get";

export const StyledAnswer = styled.p<StoryElementProps>`
  .answer {
    color: ${(props) => props.theme.color.mono5};
  }
`;

export const AnswerBase = ({ element, story, config }: StoryElementProps) => {
  const answerElementRender = get(config, ["opts", "storyElementRender", "answerElementRender"], null);
  return answerElementRender ? (
    answerElementRender({ story, config })
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
