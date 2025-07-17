import React from "react";
import styled from "styled-components";
import { StoryElementProps } from "../types";
import { Spacer } from "../../spacer";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";

const Wrapper = styled.div<{ textDirection: "ltr" | "rtl" }>`
  display: flex;
  flex-direction: column;
  position: relative;

  &:before {
    ${(props) => (props.textDirection === "ltr" ? ` left:0; content: "\\201C";` : ` right: 0; content: "\\201D";`)}
    font-size: ${(props) => props.theme.font.size.big};
    font-weight: bold;
    color: ${(props) => props.theme.color.mono7};
    margin: 0 ${(props) => props.theme.spacing.s};
    position: absolute;
    top: 4px;
  }
`;
const StyledBlockQuote = styled.blockquote<{ textDirection: "ltr" | "rtl" }>`
  ${(props) => (props.textDirection === "ltr" ? ` padding: 0 0 0 50px; ` : ` padding: 0 50px 0 0; `)}
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

export const DefaultBlockQuote = ({ element, config }: StoryElementProps) => {
  const textDirection = get(config, ["publisherConfig", "language", "direction"], "ltr");

  if (element.metadata) {
    const { content, attribution } = element.metadata;
    return (
      <Wrapper textDirection={textDirection}>
        <StyledBlockQuote textDirection={textDirection}>{content}</StyledBlockQuote>
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

export const QuoteBase = ({ element, story, config }: StoryElementProps) => {
  const quoteRender = get(config, ["opts", "render", "storyElementRender", "quoteRender"], null);

  return quoteRender ? (
    quoteRender({ story, config, element })
  ) : (
    <DefaultBlockQuote element={element} config={config} />
  );
};
/**
 * Quote is a story element.
 * The look of the Quote can be changed using the render prop quoteRender. In case quoteRender is passed in the config, it is rendered. Otherwise a default BlockQuote is rendered.
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
 *      quoteRender: ({ story, config, element }) => <MyCustomQuote story={story} config={config} storyElement={element} />
 *    }
 *  }
 * })
 * ...
 * ```
 *
 * @category StoryElements
 * @module Quote
 * @component
 */
export const Quote = withStoryAndConfig(QuoteBase);
