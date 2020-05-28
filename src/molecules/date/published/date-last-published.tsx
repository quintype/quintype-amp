import React from "react";
import { DateTime } from "../../../atoms";
import { withStoryAndConfig } from "../../../context";
import { DateLastPublishedTypes } from "./types";
import { getHumanizedDateTime } from "../../../utils/date-time";

export const DateLastPublishedBase = ({ story, format, prepend }: DateLastPublishedTypes) => {
  const dateTime = story["last-published-at"];
  if (!dateTime) return null;

  const formatDateTime = format || "do MMM, yyyy 'at' p";
  const humanizedDate = getHumanizedDateTime({
    dateFormat: formatDateTime,
    timeZone: "Asia/Kolkata",
    timeStamp: dateTime
  });

  return <DateTime formattedDate={humanizedDate} prepend={prepend} />;
};

export const DateLastPublished = withStoryAndConfig(DateLastPublishedBase);
