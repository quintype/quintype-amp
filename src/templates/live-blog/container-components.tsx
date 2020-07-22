import React from "react";
import { DateTime } from "../../atoms";
import { DateLineWrapper } from "./presentational-components";
import { CardUpdatedAtTypes } from "./types";
import { getHumanizedDateTime } from "../../utils/date-time";

export const CardUpdatedAt = ({ timeStamp }: CardUpdatedAtTypes) => {
  if (!timeStamp) return null;
  const humanizedDate = getHumanizedDateTime({
    dateFormat: "do MMM, yyyy 'at' p",
    timeZone: "Asia/Kolkata",
    timeStamp
  });
  return (
    <DateLineWrapper>
      <DateTime formattedDate={humanizedDate} prepend="Updated at:" />
    </DateLineWrapper>
  );
};
