import React from "react";
import { SectionProps } from "./types";
import styled from "styled-components";

const StyledSection = styled.h5`
  color: ${(props) => props.theme.color.sectionTextColor};
  margin: 0;
  letter-spacing: 1px;
  font-weight: bold;
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: ${(props) => props.theme.font.size.xs};
`;

const Section = ({ section }: SectionProps) => {
  const sectionName =
    section["display-name"] && section["display-name"].length > 1 ? section["display-name"] : section.name;

  return <StyledSection>{sectionName}</StyledSection>;
};

export { Section };
