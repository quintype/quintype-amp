import React from "react";
import styled from "styled-components";
import { StoryElementProps } from "../types";
import { Spacer } from "../../spacer";

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
  text-align: right;
  color: ${(props) => props.theme.color.mono6};
  font-size: ${(props) => props.theme.font.size.m};
  font-weight: bold;
  &:before {
    content: "-";
    margin-right: 5px;
  }
`;

const FallbackBlockQuote = styled.div`
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

const BlockQuote = ({ element }: StoryElementProps) => {
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

export { BlockQuote };
