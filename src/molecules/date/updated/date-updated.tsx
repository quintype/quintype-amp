import React from "react";
import { DateTime } from "../../../atoms";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { utcToZonedTime } from "date-fns-tz";

const DateUpdatedBase = ({ story, config }) => {
  const showUpdateDate = get(config, ["opts", "headerCardConfig", "dateConfig", "showUpdateDate"], false);
  const updateDatePrepend = get(config, ["opts", "headerCardConfig", "dateConfig", "updateDatePrepend"], null);
  const updatedAt = story["updated-at"];
  if (!showUpdateDate || !updatedAt) return null;

  const timeZonedTime = utcToZonedTime(updatedAt, "Asia/Kolkata");
  const humanizedString = formatDistanceToNow(timeZonedTime, { addSuffix: true });

  return <DateTime formattedDate={humanizedString} prepend={updateDatePrepend} />;
};

export const DateUpdated = withStoryAndConfig(DateUpdatedBase);
