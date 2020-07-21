import React from "react";
import { DateTime } from "../../atoms";
import { utcToZonedTime } from "date-fns-tz";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { DateLineWrapper } from "./presentational-components";

export const CardUpdatedAt = ({ timeStamp }) => {
  if (!timeStamp) return null;
  const timeZonedTime = utcToZonedTime(timeStamp, "Asia/Kolkata");
  const humanizedString = formatDistanceToNow(timeZonedTime, { addSuffix: true });
  return (
    <DateLineWrapper>
      <DateTime formattedDate={humanizedString} prepend="Updated:" />
    </DateLineWrapper>
  );
};
