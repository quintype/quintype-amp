import React from "react";
import { SectionProps } from "./types";
import styled, { css, withTheme } from "styled-components";
import { genStyles } from "../../helpers/gen-styles";
import get from "lodash.get";

const styledSectionBase = css`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.xs};
  letter-spacing: 1px;
  margin: 0;
  font-weight: bold;
`;

const SectionBase = ({ section, style, theme }: SectionProps) => {
  const wrapperStyles = get(style, "wrapper", null);
  const StyledSection = styled.h5`
    ${genStyles(styledSectionBase, wrapperStyles, theme)}
  `;
  const sectionName =
    section["display-name"] && section["display-name"].length > 1 ? section["display-name"] : section.name;

  return <StyledSection>{sectionName}</StyledSection>;
};

export const Section = withTheme(SectionBase);
