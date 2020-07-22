import React from "react";
import { DateTime } from "../../atoms";
import { utcToZonedTime } from "date-fns-tz";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { DateLineWrapper } from "./presentational-components";
import { withConfig } from "../../context";
import { CardUpdatedAtTypes } from "./types";
import get from "lodash.get";
import { getHumanizedDateTime } from "../../utils/date-time";

const CardUpdatedAtBase = ({ config, timeStamp }: CardUpdatedAtTypes) => {
  if (!timeStamp) return null;
  const cardUpdateTimeStampFormat = get(
    config,
    ["opts", "featureConfig", "liveBlog", "cardUpdateTimeStampFormat"],
    null
  );
  if (cardUpdateTimeStampFormat === "verbose") return <VerboseUpdateTime timeStamp={timeStamp} />;
  const timeZonedTime = utcToZonedTime(timeStamp, "Asia/Kolkata");
  const humanizedString = formatDistanceToNow(timeZonedTime, { addSuffix: true });
  return (
    <DateLineWrapper>
      <DateTime formattedDate={humanizedString} prepend="Updated:" />
    </DateLineWrapper>
  );
};

const VerboseUpdateTime = ({ timeStamp }) => {
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

export const CardUpdatedAt = withConfig(CardUpdatedAtBase);
