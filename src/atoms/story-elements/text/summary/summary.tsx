import React from "react";
import styled from "styled-components";
import { StoryElementProps } from "../../types";
import { withStoryAndConfig } from "../../../../context";
import get from "lodash.get";
export const StyledSummary = styled.p<StoryElementProps>`
  margin: 0 0 ${(props) => props.theme.spacing.xs} 0;
  line-height: ${(props) => props.theme.font.lineHeight.level6};
  p {
    margin: 0 0 ${(props) => props.theme.spacing.xs} 0;
    line-height: ${(props) => props.theme.font.lineHeight.level6};
    color: ${(props) => props.theme.color.mono5};
  }
`;

export const SummaryBase = ({ element, story, config }: StoryElementProps) => {
  const summaryElementRender = get(config, ["opts", "render", "storyElementRender", "summaryElementRender"], null);

  return summaryElementRender ? (
    summaryElementRender({ story, config, element })
  ) : (
    <StyledSummary
      element={element}
      story={story}
      config={config}
      as="p"
      dangerouslySetInnerHTML={{ __html: element.text || "" }}
    />
  );
};
/**
 * Summary is a story element.
 * The look of the Summary can be changed using the render prop summaryElementRender. In case summaryElementRender is passed in the config, it is rendered. Otherwise a default Summary is rendered.
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
 *      summaryElementRender: ({ story, config, element }) => <MyCustomSummary story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module Summary
 * @component
 */
export const Summary = withStoryAndConfig(SummaryBase);
