import React from "react";
import styled, { css } from "styled-components";
import { StoryElementProps } from "../types";

export type TextProps = StoryElementProps & { externalLink?: boolean };

const Text = ({ element, externalLink, style }: TextProps) => {
  let text = element.text || "";
  if (externalLink) {
    text = text.replace(/<a/g, '<a target="_blank"');
  }
  const StyledText = styled.div`
    ${baseStyles}
		${element.subtype === "summary" && (style && style["summary"] ? style["summary"] : baseSummaryStyles)}
		${element.subtype === "answer" && (style && style["answer"] ? style["answer"] : baseAnswerStyles)}
    ${element.subtype === "bigfact" && (style && style["bigfact"] ? style["bigfact"] : baseBigfactStyles)}
		${element.subtype === "question" && (style && style["question"] ? style["question"] : baseQuestionStyles)}
  `;

  return <StyledText dangerouslySetInnerHTML={{ __html: text }} />;
};

const baseStyles = css`
  color: ${(props) => props.theme.color.mono6};
  font-size: ${(props) => props.theme.font.size.xs};
  font-family: ${(props) => props.theme.font.family.primary};
  line-height: ${(props) => props.theme.font.lineHeight.level3};

  p {
    margin: 0 0 ${(props) => props.theme.spacing.xs} 0;
    line-height: ${(props) => props.theme.font.lineHeight.level6};
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
  .answer {
    color: ${(props) => props.theme.color.mono5};
  }

  .bigfact-description {
    color: ${(props) => props.theme.color.mono6};
    line-height: ${(props) => props.theme.font.lineHeight.level5};
    font-size: ${(props) => props.theme.font.size.xs};
    margin-top: 10px;
  }
`;
const baseQuestionStyles = css`
  color: ${(props) => props.theme.color.mono7};
  line-height: ${(props) => props.theme.font.lineHeight.level2};
  font-weight: ${(props) => props.theme.font.weight.bold};
}`;
const baseAnswerStyles = css`
  color: ${(props) => props.theme.color.mono5};
`;

const baseSummaryStyles = css`
  font-style: italic;
  color: ${(props) => props.theme.color.mono5};
`;

const baseBigfactStyles = css`
  color: ${(props) => props.theme.color.mono6};
  line-height: ${(props) => props.theme.font.lineHeight.level3};
  font-size: ${(props) => props.theme.font.size.l};
`;
export { Text };
