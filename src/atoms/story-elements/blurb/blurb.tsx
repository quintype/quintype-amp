import React from "react";
import { StoryElementProps } from "../types";
import styled from "styled-components";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

const StyledBlurb = styled.blockquote<{ textDirection: "ltr" | "rtl" }>`
  font-size: ${(props) => props.theme.font.size.m};
  color: ${(props) => props.theme.color.mono7};
  margin: 0 ${(props) => props.theme.spacing.s};
  line-height: ${(props) => props.theme.font.lineHeight.level3};
  ${(props) =>
    props.textDirection === "ltr"
      ? ` border-left: 3px solid ${props.theme.color.mono7}; `
      : ` border-right: 3px solid ${props.theme.color.mono7}; `}
  
  padding: 0 ${(props) => props.theme.spacing.m};

  /* Applies when rendering direct html, fallback case */
  blockquote {
    margin: 0 ${(props) => props.theme.spacing.s};
  }
`;

export const DefaultBlurb = ({ element, config }: StoryElementProps) => {
  const textDirection = get(config, ["publisherConfig", "language", "direction"], "ltr");

  if (element.metadata && element.metadata.content) {
    return <StyledBlurb textDirection={textDirection}>{element.metadata.content}</StyledBlurb>;
  }
  return (
    <StyledBlurb textDirection={textDirection} as="div" dangerouslySetInnerHTML={{ __html: element.text || "" }} />
  );
};

export const BlurbBase = ({ element, story, config }: StoryElementProps) => {
  const blurbRender = get(config, ["opts", "render", "storyElementRender", "blurbRender"], null);

  return blurbRender ? blurbRender({ story, config, element }) : <DefaultBlurb element={element} config={config} />;
};

/**
 * Blurb is a story element.
 * The look of the Blurb can be changed using the render prop blurbRender. In case blurbRender is passed in the config, it is rendered. Otherwise a default Blurb is rendered.
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
 *      blurbRender: ({ story, config, element }) => <MyCustomBlurb story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module Blurb
 * @component
 */
export const Blurb = withStoryAndConfig(BlurbBase);
