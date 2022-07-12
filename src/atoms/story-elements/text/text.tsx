import React from "react";
import styled from "styled-components";
import { StoryElementProps } from "../types";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";
import { conditionExternalLinks } from "./text.helpers";

export const StyledText = styled.div<StoryElementProps>`
  color: ${(props) => props.theme.color.mono6};
  font-size: ${(props) => props.theme.font.size.xs};
  font-family: ${(props) => props.theme.font.family.primary};
  line-height: ${(props) => props.theme.font.lineHeight.level3};
  word-break: break-word;

  p {
    margin: 0 0 ${(props) => props.theme.spacing.xs} 0;
    line-height: ${(props) => props.theme.font.lineHeight.level6};
    font-size: ${(props) => props.theme.font.size.xs};
  }
  a {
    color: ${(props) => props.theme.color.mono6};
  }
  ul {
    list-style: disc;
    margin: 0;
    padding: 0 0 0 ${(props) => props.theme.spacing.l};
  }

  ol {
    list-style: decimal;
    margin: 0;
    padding: 0 0 0 ${(props) => props.theme.spacing.l};
  }

  h2 {
    font-size: ${(props) => props.theme.font.size.huge};
    line-height: ${(props) => props.theme.font.lineHeight.level5};
    font-family: ${(props) => props.theme.font.family.primary};
    margin: 0 0 ${(props) => props.theme.spacing.s} 0;
  }

  h3 {
    font-size: ${(props) => props.theme.font.size.xl};
    line-height: ${(props) => props.theme.font.lineHeight.level5};
    font-family: ${(props) => props.theme.font.family.primary};
    margin: 0 0 ${(props) => props.theme.spacing.s} 0;
  }
`;
const CtaText = styled.div<StoryElementProps>`
  margin: ${(props) => props.theme.spacing.l};
  text-align: center;
  a {
    border: ${(props) => `1px solid ${props.theme.color.mono4}`};
    border-radius: 3px;
    padding: 10px;
    color: unset;
    text-decoration: none;
  }
`;

export const DefaultText = ({ element, config }: StoryElementProps) => {
  let text = element.text || "";
  text = conditionExternalLinks({ text, config });
  if (element.subtype === "cta") {
    return <CtaText element={element} dangerouslySetInnerHTML={{ __html: text }} />;
  }
  return <StyledText element={element} dangerouslySetInnerHTML={{ __html: text }} />;
};

export const TextBase = ({ element, story, config }: StoryElementProps) => {
  const textElementRender = get(config, ["opts", "render", "storyElementRender", "textElementRender"], null);
  return textElementRender ? (
    textElementRender({ story, config, element })
  ) : (
    <DefaultText element={element} config={config} />
  );
};
/**
 * Text is a story element.
 * The look of the Text can be changed using the render prop textElementRender. In case textElementRender is passed in the config, it is rendered. Otherwise a default Text is rendered.
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
 *      textElementRender: ({ story, config, element }) => <MyCustomText story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module Text
 * @component
 */
export const Text = withStoryAndConfig(TextBase);
