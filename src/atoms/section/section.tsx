import React from "react";
import { SectionProps } from "./types";
import styled from "styled-components";

const StyledSection = styled.span.attrs((props) => props.style)`
  ${(props) =>
    !props.style &&
    `
    color: ${props.theme.color.sectionTextColor};
    margin: 0;
    letter-spacing: 1px;
    font-weight: bold;
  `}
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.xs};

`;

const Section = ({ section, style }: SectionProps) => {
  const sectionName =
    section["display-name"] && section["display-name"].length > 1 ? section["display-name"] : section.name;

  return <StyledSection style={style}>{sectionName}</StyledSection>;
};

export { Section };
