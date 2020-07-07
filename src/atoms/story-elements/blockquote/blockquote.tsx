import React from "react";
import styled from "styled-components";
import { StoryElementProps } from "../types";
import { Spacer } from "../../spacer";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &:before {
    content: "\\201C";
    font-size: ${(props) => props.theme.font.size.big};
    font-weight: bold;
    color: ${(props) => props.theme.color.mono7};
    margin: 0 ${(props) => props.theme.spacing.s};
    position: absolute;
    top: 4px;
  }
`;
const StyledBlockQuote = styled.blockquote`
  padding: 0 0 0 50px;
  margin: 0;
  font-size: ${(props) => props.theme.font.size.l};
  color: ${(props) => props.theme.color.mono6};
  line-height: ${(props) => props.theme.font.lineHeight.level5};
`;
const StyledAttribution = styled.span`
  color: ${(props) => props.theme.color.mono6};
  font-size: ${(props) => props.theme.font.size.m};
  font-weight: bold;
  padding: 0 0 0 38px;
  &:before {
    content: "-";
    margin-right: 5px;
  }
`;
export const FallbackBlockQuote = styled.div`
  div {
    display: flex;
    flex-direction: column;
    position: relative;

    &:before {
      content: "\\201C";
      font-size: ${(props) => props.theme.font.size.big};
      font-weight: bold;
      color: ${(props) => props.theme.color.mono7};
      margin: 0 ${(props) => props.theme.spacing.s};
      position: absolute;
      top: 4px;
    }
  }

  blockquote {
    padding: 0 0 0 50px;
    margin: 0;
    font-size: ${(props) => props.theme.font.size.l};
    color: ${(props) => props.theme.color.mono6};
    line-height: ${(props) => props.theme.font.lineHeight.level5};
  }

  .attribution {
    text-align: right;
    color: ${(props) => props.theme.color.mono6};
    font-size: ${(props) => props.theme.font.size.m};
    font-weight: bold;
    &:before {
      content: "-";
      margin-right: 5px;
    }
  }
`;

export const DefaultBlockQuote = ({ element }: StoryElementProps) => {
  if (element.metadata) {
    const { content, attribution } = element.metadata;
    return (
      <Wrapper>
        <StyledBlockQuote>{content}</StyledBlockQuote>
        {attribution && attribution.length && (
          <React.Fragment>
            <Spacer token="s" />
            <StyledAttribution>{attribution}</StyledAttribution>
          </React.Fragment>
        )}
      </Wrapper>
    );
  }

  return <FallbackBlockQuote dangerouslySetInnerHTML={{ __html: element.text || "" }} />;
};

export const BlockQuoteBase = ({ element, story, config }: StoryElementProps) => {
  const blockquoteRender = get(config, ["opts", "storyElementRender", "blockquoteRender"], null);

  return blockquoteRender ? (
    blockquoteRender({ story, config, element })
  ) : (
    <DefaultBlockQuote element={element} story={story} config={config} />
  );
};
/**
 * BlockQuote is a story element.
 * The look of the BlockQuote can be changed using the render prop blockquoteRender. In case blockquoteRender is passed in the config, it is rendered. Otherwise a default BlockQuote is rendered.
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {Object} params.story story object
 * @param {Object} params.config config object
 * @param {Object} params.element the story element. This is same as the story element found in the story API response
 *
 * ```javascript
 * ...
 * ampRoutes(app, {
 *    blockquoteRender: ({ story, config, element }) => <MyCustomBlockQuote story={story} config={config} storyElement={element} />
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module BlockQuote
 * @component
 */
export const BlockQuote = withStoryAndConfig(BlockQuoteBase);
