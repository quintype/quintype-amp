import React from "react";
import styled from "styled-components";
import { StoryElementProps } from "../../types";
import { withStoryAndConfig } from "../../../../context";
import get from "lodash.get";
export const StyledQuestion = styled.p<StoryElementProps>`
  color: ${(props) => props.theme.color.mono7};
  line-height: ${(props) => props.theme.font.lineHeight.level2};
  font-weight: ${(props) => props.theme.font.weight.bold};
`;

export const QuestionBase = ({ element, story, config }: StoryElementProps) => {
  const questionElementRender = get(config, ["opts", "storyElementRender", "questionElementRender"], null);

  return questionElementRender ? (
    questionElementRender({ story, config })
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
