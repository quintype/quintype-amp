import React from "react";
import { StoryElementProps } from "../types";
import styled from "styled-components";

const StyledBlurb = styled.blockquote.attrs(({ inlineStyles }: StyledBlurbTypes) => ({
  style: inlineStyles
}))<StyledBlurbTypes>`
  font-size: ${(props) => props.theme.font.size.m};
  color: ${(props) => props.theme.color.mono7};
  margin: 0 ${(props) => props.theme.spacing.s};
  line-height: ${(props) => props.theme.font.lineHeight.level3};
  border-left: 3px solid ${(props) => props.theme.color.mono7};
  padding: 0 ${(props) => props.theme.spacing.m};

  // Applies when rendering direct html, fallback case
  blockquote {
    margin: 0 ${(props) => props.theme.spacing.s};
  }
`;
export interface StyledBlurbTypes {
  inlineStyles?: object;
}
const Blurb = ({ element, inlineStyles }: StoryElementProps) => {
  if (element.metadata && element.metadata.content) {
    return <StyledBlurb inlineStyles={inlineStyles}>{element.metadata.content}</StyledBlurb>;
  }
  return <StyledBlurb inlineStyles={inlineStyles} as="div" dangerouslySetInnerHTML={{ __html: element.text || "" }} />;
};

export { Blurb };
