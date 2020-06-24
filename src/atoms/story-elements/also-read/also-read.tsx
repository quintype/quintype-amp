import React from "react";
import { StoryElementProps } from "../types";
import get from "lodash.get";
import styled from "styled-components";
import { Spacer } from "../../spacer";
import { withStoryAndConfig } from "../../../context";

export const StyledAlsoRead = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.font.size.xs};
  span {
    font-weight: bold;
  }
  a {
    color: ${(props) => props.theme.color.primaryColor};
  }

  a:hover {
    text-decoration: none;
  }
`;

export const AlsoReadBase = ({ element, story, config }: StoryElementProps) => {
  const linkedStoryId = get(element, ["metadata", "linked-story-id"]);
  const linkedStory = get(story, ["linked-stories", linkedStoryId]);
  const alsoReadRender = get(config, ["opts", "storyElementRender", "alsoReadRender"], null);

  if (!linkedStory) {
    return null;
  }

  return alsoReadRender ? (
    alsoReadRender({ story, config, element })
  ) : (
    <StyledAlsoRead>
      <Spacer token="m" align="horizontal" />
      <span>Also read: </span>
      <Spacer token="s" align="horizontal" />
      <a href={linkedStory.url}>{linkedStory.headline}</a>
      <Spacer token="m" align="horizontal" />
    </StyledAlsoRead>
  );
};
/**
 * AlsoRead is a story element
 * The look of the AlsoRead can be changed using the render prop alsoReadRender. In case alsoReadRender is passed in the config, it is rendered. Otherwise a default AlsoRead is rendered.
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Object} params.story story object
 * @param {Object} params.config config object
 * @param {Object} params.element the story element. This is same as the story element found in the story API response
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    alsoReadRender: ({ story, config, element }) => <MyCustomAlsoRead story={story} config={config} storyElement={element} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module AlsoRead
 * @component
 */
export const AlsoRead = withStoryAndConfig(AlsoReadBase);
