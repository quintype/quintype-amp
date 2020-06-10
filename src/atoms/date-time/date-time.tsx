import React from "react";
import { DateTimeProps } from "./types";
import styled from "styled-components";
import { Spacer } from "../spacer";

export const StyledTime = styled.time.attrs(({ style }: DateTimeProps & { style?: object }) => ({ style: style }))`
  color: ${(props) => props.theme.color.mono5};
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.font.size.tiny};
  margin: 0;
`;
export const DateTime = ({ prepend, formattedDate, inlineStyles }: DateTimeProps) => (
  <StyledTime dateTime={formattedDate} style={inlineStyles}>
    {prepend && prepend}
    {prepend && <Spacer token="xs" align="horizontal" />}
    {formattedDate}
  </StyledTime>
);
