import React from "react";
import { SectionProps } from "./types";
import styled from "styled-components";

export const StyledSection = styled.div.attrs(({ inlineStyles }: StyledSectionTypes) => ({ style: inlineStyles }))<
  StyledSectionTypes
>``;
const StyledSectionName = styled.h5`
  color: ${(props) => props.theme.color.sectionTextColor};
  margin: 0;
  letter-spacing: 1px;
  font-weight: bold;
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.xs};
`;
export interface StyledSectionTypes {
  inlineStyles?: object;
}

const Section = ({ section, inlineStyles }: SectionProps) => {
  const sectionName =
    section["display-name"] && section["display-name"].length > 1 ? section["display-name"] : section.name;

  return (
    <StyledSection inlineStyles={inlineStyles}>
      <StyledSectionName>{sectionName}</StyledSectionName>
    </StyledSection>
  );
};

export { Section };
