import React from "react";
import { SectionProps, StyledSectionTypes } from "./types";
import styled from "styled-components";

const StyledSection = styled.span.attrs(({ stylesFromConfig }: StyledSectionTypes) => {
  return { style: stylesFromConfig };
})<StyledSectionTypes>`
  ${(props) =>
    !props.stylesFromConfig &&
    `
    color: ${props.theme.color.sectionTextColor};
    margin: 0;
    letter-spacing: 1px;
    font-weight: bold;
  `}
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.xs};
`;

const Section = ({ section, stylesFromConfig = {} }: SectionProps) => {
  const sectionName =
    section["display-name"] && section["display-name"].length > 1 ? section["display-name"] : section.name;

  return <StyledSection stylesFromConfig={stylesFromConfig}>{sectionName}</StyledSection>;
};

export { Section };
