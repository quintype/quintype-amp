import React from "react";
import { DateTimeProps } from "./types";
import styled from "styled-components";
import { Spacer } from "../spacer";

export const StyledTimeWrapper = styled.time.attrs(({ inlineStyles }: StyledTimeTypes) => ({ style: inlineStyles }))<
  StyledTimeTypes
>``;
export interface StyledTimeTypes {
  inlineStyles?: object;
}
const StyledTime = styled.time`
  color: ${(props) => props.theme.color.mono5};
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.font.size.tiny};
  margin: 0;
`;
export const DateTime = ({ prepend, formattedDate, inlineStyles }: DateTimeProps) => (
  <StyledTimeWrapper inlineStyles={inlineStyles}>
    <StyledTime dateTime={formattedDate}>
      {prepend && prepend}
      {prepend && <Spacer token="xs" align="horizontal" />}
      {formattedDate}
    </StyledTime>
  </StyledTimeWrapper>
);
