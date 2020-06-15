import React from "react";
import styled, { css } from "styled-components";
import { StoryElementProps } from "../types";

export type TextProps = StoryElementProps & { externalLink?: boolean; style?: { [key: string]: string } };

const Text = ({ element, externalLink, style }: TextProps) => {
  let text = element.text || "";
  if (externalLink) {
    text = text.replace(/<a/g, '<a target="_blank"');
  }

  return <StyledText element={element} style={style} dangerouslySetInnerHTML={{ __html: text }} />;
};

const StyledText = styled.div<StoryElementProps & { style?: { [key: string]: string } }>`
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
	${(props) =>
    props.element.subtype === "summary" &&
    (props.style && props.style.summary ? props.style.summary : baseSummaryStyles)}
	${(props) =>
    props.element.subtype === "answer" && (props.style && props.style.answer ? props.style.answer : baseAnswerStyles)}
	${(props) =>
    props.element.subtype === "bigfact" &&
    (props.style && props.style.bigfact ? props.style.bigfact : baseBigfactStyles)}
	${(props) =>
    props.element.subtype === "question" &&
    (props.style && props.style.question ? props.style.question : baseQuestionStyles)}
`;
const baseQuestionStyles = css`
  color: ${(props) => props.theme.color.mono7};
  line-height: ${(props) => props.theme.font.lineHeight.level2};
  font-weight: ${(props) => props.theme.font.weight.bold};
`;
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
