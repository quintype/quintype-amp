import React from "react";
import { StoryElementProps } from "../types";
import styled, { css, withTheme } from "styled-components";
import { genStyles } from "../../../helpers/gen-styles";
import get from "lodash.get";

const baseBlurbStyles = css`
  font-size: ${(props) => props.theme.font.size.m};
  color: ${(props) => props.theme.color.mono7};
  margin: 0 ${(props) => props.theme.spacing.s};
  line-height: ${(props) => props.theme.font.lineHeight.level3};
  border-left: 5px solid ${(props) => props.theme.color.mono7};
  padding: 0 ${(props) => props.theme.spacing.m};

  /* Applies when rendering direct html, fallback case */
  blockquote {
    margin: 0 ${(props) => props.theme.spacing.s};
  }
`;

const BlurbBase = ({ element, children, style, theme }: StoryElementProps) => {
  // const metadataContent = get(element, ["metadata", "content"], null);
  // const elementText = get(element, "text", "");
  const blurbStyles = get(style, "blurb", null);
  const StyledBlurb = styled.blockquote`
    ${genStyles(baseBlurbStyles, blurbStyles, theme)}
  `;
  if (children) return <StyledBlurb>{children}</StyledBlurb>;
  if (element.metadata && element.metadata.content) {
    return <StyledBlurb>{element.metadata.content}</StyledBlurb>;
  }
  return <StyledBlurb as="div" dangerouslySetInnerHTML={{ __html: element.text || "" }} />;
  // return metadataContent ? (
  //   <StyledBlurb>{metadataContent}</StyledBlurb>
  // ) : (
  //   <StyledBlurb as="div" dangerouslySetInnerHTML={{ __html: elementText }} />
  // );
};

export const Blurb = withTheme(BlurbBase);
