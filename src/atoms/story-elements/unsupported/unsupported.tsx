import React, { Fragment } from "react";
import { StoryElementProps } from "../types";
import styled from "styled-components";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

const StyledWrapper = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.color.mono2};
  text-align: center;
  border-radius: 3px;
`;

const UnsupportedBase = ({ element, story, config }: StoryElementProps) => {
  const unsupportedElementRender = get(
    config,
    ["opts", "render", "storyElementRender", "unsupportedElementRender"],
    null
  );
  const { type, subtype } = element;

  return unsupportedElementRender ? (
    unsupportedElementRender({ story, config, element })
  ) : (
    <StyledWrapper>
      Element of type: '{type}'{subtype && <Fragment> and sub-type: '{subtype}'</Fragment>} is not supported by AMP
    </StyledWrapper>
  );
};

/**
 * Unsupported element is displayed as a fallback if no other matching story element is found for the type | subtype
 * The look of the Unsupported element can be changed using the render prop unsupportedElementRender. In case unsupportedElementRender is passed in the config, it is rendered. Otherwise a default Unsupported element is rendered.
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
 *      unsupportedElementRender: ({ story, config, element }) => <MyCustomUnsupportedElement story={story} config={config} storyElement={element} />
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
export const Unsupported = withStoryAndConfig(UnsupportedBase);
