import React from "react";
import { StoryElementProps } from "../types";
import styled from "styled-components";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";
export const StyledTitle = styled.h3`
  font-size: ${(props) => props.theme.font.size.l};
  font-weight: ${(props) => props.theme.font.weight.bold};
  line-height: ${(props) => props.theme.font.lineHeight.level6};
  margin: 0;
  text-transform: uppercase;
`;

export const TitleBase = ({ element, story, config }: StoryElementProps) => {
  const titleElementRender = get(config, ["opts", "storyElementRender", "titleElementRender"], null);

  return titleElementRender ? titleElementRender({ story, config }) : <StyledTitle>{element.text}</StyledTitle>;
};
/**
 * Summary is a story element.
 * The look of the Title can be changed using the render prop titleElementRender. In case titleElementRender is passed in the config, it is rendered. Otherwise a default Title is rendered.
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    titleElementRender: ({ story, config }) => <MyCustomTitle story={story} config={config} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module Title
 * @component
 */
export const Title = withStoryAndConfig(TitleBase);
