import React from "react";
import { DateTimeProps } from "./types";
import styled from "styled-components";

export const StyledTime = styled.time`
  color: ${(props) => props.theme.color.mono5};
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.font.size.tiny};
  margin: 0;
`;

export const DateTime = ({ prepend, formattedDate }: DateTimeProps) => (
  <StyledTime dateTime={formattedDate}>
    {prepend && prepend}
    {formattedDate}
  </StyledTime>
);
