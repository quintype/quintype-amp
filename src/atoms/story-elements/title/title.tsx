import React from "react";
import { StoryElementProps } from "../types";
import styled from "styled-components";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";
export const StyledTitle = styled.h3`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.l};
  font-weight: ${(props) => props.theme.font.weight.bold};
  line-height: ${(props) => props.theme.font.lineHeight.level6};
  margin: 0;
  text-transform: uppercase;
`;

export const TitleBase = ({ element, story, config, counter }: StoryElementProps) => {
  const titleElementRender = get(config, ["opts", "render", "storyElementRender", "titleElementRender"], null);

  return titleElementRender ? (
    titleElementRender({ story, config, element, counter })
  ) : (
    <StyledTitle>{element.text}</StyledTitle>
  );
};
/**
 * Summary is a story element.
 * The look of the Title can be changed using the render prop titleElementRender. In case titleElementRender is passed in the config, it is rendered. Otherwise a default Title is rendered.
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
 *      titleElementRender: ({ story, config, element }) => <MyCustomTitle story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module Title
 * @component
 */
export const Title = withStoryAndConfig(TitleBase);
