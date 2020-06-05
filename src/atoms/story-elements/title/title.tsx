import React from "react";
import { StoryElementProps } from "../types";
import styled from "styled-components";

const StyledTitle = styled.h3.attrs(({ inlineStyles }: StyledTitleTypes) => ({
  style: inlineStyles
}))<StyledTitleTypes>`
  font-size: ${(props) => props.theme.font.size.l};
  font-weight: ${(props) => props.theme.font.weight.bold};
  line-height: ${(props) => props.theme.font.lineHeight.level6};
  margin: 0;
  text-transform: uppercase;
`;

export interface StyledTitleTypes {
  inlineStyles?: object;
}

export const Title = ({ element, inlineStyles }: StoryElementProps) => (
  <StyledTitle inlineStyles={inlineStyles}>{element.text}</StyledTitle>
);
