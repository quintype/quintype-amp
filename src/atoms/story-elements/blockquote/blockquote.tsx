import React from "react";
import styled from "styled-components";
import { StoryElementProps } from "../types";
import { Spacer } from "../../spacer";
import { blockquoteTypes } from "./types";
import { CommonRenderPropTypes } from "../../../types/config";
import { withStoryAndConfig } from "../../../context";

const Wrapper = styled.div.attrs(({ style }: StoryElementProps) => ({
  style
}))`
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
const StyledBlockQuote = styled.blockquote.attrs(({ style }: StoryElementProps) => ({
  style
}))`
  padding: 0 0 0 50px;
  margin: 0;
  font-size: ${(props) => props.theme.font.size.l};
  color: ${(props) => props.theme.color.mono6};
  line-height: ${(props) => props.theme.font.lineHeight.level5};
`;
const StyledAttribution = styled.span.attrs(({ style }: StoryElementProps) => ({
  style
}))`
  color: ${(props) => props.theme.color.mono6};
  font-size: ${(props) => props.theme.font.size.m};
  font-weight: bold;
  padding: 0 0 0 38px;
  &:before {
    content: "-";
    margin-right: 5px;
  }
`;
const FallbackBlockQuote = styled.div.attrs(({ style }: StoryElementProps) => ({
  style
}))`
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

export const DefaultBlockQuote = ({
  element,
  wrapperInlineStyles,
  blockquoteInlineStyles,
  attributionInlineStyles,
  fallbackInlineStyles
}: StoryElementProps & blockquoteTypes) => {
  if (element.metadata) {
    const { content, attribution } = element.metadata;
    return (
      <Wrapper style={wrapperInlineStyles}>
        <StyledBlockQuote style={blockquoteInlineStyles}>{content}</StyledBlockQuote>
        {attribution && attribution.length && (
          <React.Fragment>
            <Spacer token="s" />
            <StyledAttribution style={attributionInlineStyles}>{attribution}</StyledAttribution>
          </React.Fragment>
        )}
      </Wrapper>
    );
  }

  return <FallbackBlockQuote style={fallbackInlineStyles} dangerouslySetInnerHTML={{ __html: element.text || "" }} />;
};

export const BlockQuoteBase = ({ element, story, config }: StoryElementProps & CommonRenderPropTypes) => {
  return config.opts && config.opts.blockquoteRender ? (
    config.opts.blockquoteRender({ story, config })
  ) : (
    <DefaultBlockQuote element={element} story={story} config={config} />
  );
};
export const BlockQuote = withStoryAndConfig(BlockQuoteBase);
