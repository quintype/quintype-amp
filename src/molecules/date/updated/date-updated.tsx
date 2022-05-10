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

/**
 * DateUpdated Component - uses library "date-fns-tz" to format the story updated date. Uses the "DateTime" atomic component internally
 *
 * ```js
 * <DateUpdated prepend="Updated: " />
 * ```
 *
 * @param {Object} props Object containing parameters passed to the render prop
 * @param {String} props.prepend Optional. String that is prepended to the date
 *
 * @category Molecules
 * @component
 */

export const DateUpdated = withStoryAndConfig(DateUpdatedBase);
