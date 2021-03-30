import React, { Fragment } from "react";
import { StoryElementProps } from "../../types";
import { withStoryAndConfig } from "../../../../context";
import { StyledQuestion } from "../question/question";
import { StyledAnswer } from "../answer/answer";
import get from "lodash.get";

export const QAndABase = ({ element, story, config }: StoryElementProps) => {
  const qAndAElementRender = get(config, ["opts", "render", "storyElementRender", "qAndAElementRender"], null);
  if (qAndAElementRender) return qAndAElementRender({ story, config, element });

  const question = get(element, ["metadata", "question"], null);
  const answer = get(element, ["metadata", "answer"], null);

  return (
    <div>
      {question && (
        <Fragment>
          <StyledQuestion dangerouslySetInnerHTML={{ __html: question }} />
        </Fragment>
      )}
      {answer && (
        <Fragment>
          <StyledAnswer dangerouslySetInnerHTML={{ __html: answer }} />
        </Fragment>
      )}
    </div>
  );
};
/**
 * QAndA is a story element.
 * The look of the Question can be changed using the render prop qAndAElementRender. In case qAndAElementRender is passed in the config, it is rendered. Otherwise a default QAndA element is rendered.
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Object} params.story story object
 * @param {Object} params.config config object
 * @param {Object} params.element the story element. This is same as the story element found in the story API response
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    qAndAElementRender: ({ story, config, element }) => <MyCustomQAndAElement story={story} config={config} storyElement={element} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module QAndA
 * @component
 */
export const QAndA = withStoryAndConfig(QAndABase);
