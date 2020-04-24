import React from "react";
import { format } from "date-fns/fp";
import { DateTimeProps } from "./types";
import styled, { css, withTheme } from "styled-components";
import { genStyles } from "../../helpers/gen-styles";
import get from "lodash.get";

const wrapperBaseStyles = css`
  color: ${(props) => props.theme.color.mono5};
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.font.size.xxs};
  margin: 0;
`;

const dateTimeFormats = {
  onlyDate: "do MMM, yyyy",
  dateWithTime: "do MMM, yyyy 'at' p"
};

const DateTimeBase = ({ dateTime, formatString, showTime, style, theme }: DateTimeProps) => {
  const wrapperStyles = get(style, "wrapper", null);
  const StyledTime = styled.time`
    ${genStyles(wrapperBaseStyles, wrapperStyles, theme)}
  `;
  if (!dateTime) {
    return null;
  }
  let formatDateTime;
  if (formatString) {
    formatDateTime = formatString;
  } else {
    formatDateTime = showTime ? dateTimeFormats.dateWithTime : dateTimeFormats.onlyDate;
  }
  const humanizedDate = format(formatDateTime, dateTime);
  return <StyledTime dateTime={humanizedDate}>{humanizedDate}</StyledTime>;
};

export const DateTime = withTheme(DateTimeBase);
