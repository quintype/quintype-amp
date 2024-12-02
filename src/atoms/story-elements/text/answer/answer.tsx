import React from "react";
import styled from "styled-components";
import { StoryElementProps } from "../../types";
import { withStoryAndConfig } from "../../../../context";
import get from "lodash.get";

export const StyledAnswer = styled.div<{ textDirection: "ltr" | "rtl" }>`
  font-size: ${(props) => props.theme.font.size.s};
  color: ${(props) => props.theme.color.mono7};
  line-height: ${(props) => props.theme.font.lineHeight.level5};

  & > p {
    ${(props) =>
      props.textDirection === "ltr"
        ? ` :before {
          font-weight: ${props.theme.font.weight.bold};
          content: "A: ";
        } `
        : ` :after {
          font-weight: ${props.theme.font.weight.bold};
          content: " :A";
        } `}
  }
`;

export const AnswerBase = ({ element, story, config, counter }: StoryElementProps) => {
  const answerElementRender = get(config, ["opts", "render", "storyElementRender", "answerElementRender"], null);
  const textDirection = get(config, ["publisherConfig", "language", "direction"], "ltr");

  return answerElementRender ? (
    answerElementRender({ story, config, element, counter })
  ) : (
    <StyledAnswer textDirection={textDirection} dangerouslySetInnerHTML={{ __html: element.text || "" }} />
  );
};
/**
 * Answer is a story element.
 * The look of the Answer can be changed using the render prop answerElementRender. In case answerElementRender is passed in the config, it is rendered. Otherwise a default Answer is rendered.
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Object} params.story story object
 * @param {Object} params.config config object
 * @param {Object} params.element the story element. This is same as the story element found in the story API response
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *  render: {
 *    storyElementRender: {
 *      answerElementRender: ({ story, config, element }) => <MyCustomAnswer story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module Answer
 * @component
 */
export const Answer = withStoryAndConfig(AnswerBase);
