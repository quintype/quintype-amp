import React from "react";
import { DateTimeProps } from "./types";
import styled from "styled-components";
import { Spacer } from "../spacer";

export const StyledTime = styled.time`
  color: ${(props) => props.theme.color.mono5};
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.font.size.tiny};
  margin: 0;
`;

/**
 *
 * DateTime displays formatted date and prepend, if provided
 *
 * ```js
 * <DateTime formattedDate="14 June 2017" />
 * <DateTime formattedDate="14 June 2017" prepend="Published: " />
 * ```
 *
 * @param {Object} params object containing parameters passed to the render prop
 * @param {String|Component} params.prepend string or component (icon) that is prepended
 * @param {String} params.formattedDate formatted date
 *
 * @category Atoms
 * @component
 *
 */

export const DateTime = ({ prepend, formattedDate }: DateTimeProps) => (
  <StyledTime dateTime={formattedDate}>
    {prepend && prepend}
    {prepend && <Spacer token="xs" align="horizontal" />}
    {formattedDate}
  </StyledTime>
);
