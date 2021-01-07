import React from "react";
import styled from "styled-components";
import { StoryElementProps } from "../../types";
import { withStoryAndConfig } from "../../../../context";
import get from "lodash.get";

const StyledQuestion = styled.div`
  font-size: ${(props) => props.theme.font.size.s};
  color: ${(props) => props.theme.color.mono7};
  line-height: ${(props) => props.theme.font.lineHeight.level5};
  font-weight: ${(props) => props.theme.font.weight.bold};

  & > p {
    :before {
      content: "Q: ";
    }
  }
`;

export const QuestionBase = ({ element, story, config }: StoryElementProps) => {
  const questionElementRender = get(config, ["opts", "render", "storyElementRender", "questionElementRender"], null);

  return questionElementRender ? (
    questionElementRender({ story, config, element })
  ) : (
    <StyledQuestion dangerouslySetInnerHTML={{ __html: element.text || "" }} />
  );
};
/**
 * Question is a story element.
 * The look of the Question can be changed using the render prop questionElementRender. In case questionElementRender is passed in the config, it is rendered. Otherwise a default Question is rendered.
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Object} params.story story object
 * @param {Object} params.config config object
 * @param {Object} params.element the story element. This is same as the story element found in the story API response
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    questionElementRender: ({ story, config, element }) => <MyCustomQuestion story={story} config={config} storyElement={element} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module Question
 * @component
 */
export const Question = withStoryAndConfig(QuestionBase);
