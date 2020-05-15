import React from "react";
import { StoryElementProps } from "../types";
import styled from "styled-components";

const StyledTitle = styled.h3`
  font-size: ${(props) => props.theme.font.size.l};
  font-weight: ${(props) => props.theme.font.weight.bold};
  line-height: ${(props) => props.theme.font.lineHeight.level6};
  margin: 0;
  text-transform: uppercase;
`;

export const Title = ({ element }: StoryElementProps) => <StyledTitle>{element.text}</StyledTitle>;
