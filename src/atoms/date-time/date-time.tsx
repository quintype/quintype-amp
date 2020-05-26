import React from "react";
import { format, utcToZonedTime } from "date-fns-tz";
import { DateTimeProps } from "./types";
import styled from "styled-components";

const StyledTime = styled.time`
  color: ${(props) => props.theme.color.mono5};
  font-family: ${(props) => props.theme.font.family.secondary};
  font-size: ${(props) => props.theme.font.size.tiny};
  margin: 0;
`;

const dateTimeFormats = {
  onlyDate: "do MMM, yyyy",
  dateWithTime: "do MMM, yyyy 'at' p"
};

export const DateTime = ({ dateTime, formatString, showTime, prepend }: DateTimeProps) => {
  if (!dateTime) {
    return null;
  }

  const timeZone = "Asia/Kolkata";
  const timeZonedTime = utcToZonedTime(dateTime, timeZone);

  let formatDateTime;
  if (formatString) {
    formatDateTime = formatString;
  } else {
    formatDateTime = showTime ? dateTimeFormats.dateWithTime : dateTimeFormats.onlyDate;
  }

  const humanizedDate = format(timeZonedTime, formatDateTime, { timeZone });
  return (
    <StyledTime dateTime={humanizedDate}>
      {prepend && prepend}
      {humanizedDate}
    </StyledTime>
  );
};
