import React from "react";
import { DateTime } from "../../../atoms";
import { withStoryAndConfig } from "../../../context";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { utcToZonedTime } from "date-fns-tz";
import { DateUpdatedTypes } from "./types";

export const DateUpdatedBase = ({ story, prepend }: DateUpdatedTypes) => {
  const updatedAt = story["updated-at"];
  if (!updatedAt) return null;

  const timeZonedTime = utcToZonedTime(updatedAt, "Asia/Kolkata");
  const humanizedString = formatDistanceToNow(timeZonedTime, { addSuffix: true });

  return <DateTime formattedDate={humanizedString} prepend={prepend} />;
};

export const DateUpdated = withStoryAndConfig(DateUpdatedBase);
