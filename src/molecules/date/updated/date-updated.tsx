import React from "react";
import get from "lodash.get";
import { DateTime } from "../../../atoms";
import { withStoryAndConfig } from "../../../context";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { utcToZonedTime } from "date-fns-tz";
import { DateUpdatedTypes } from "./types";

export const DateUpdatedBase = ({ story, prepend, config }: DateUpdatedTypes) => {
  const updatedAt = story["updated-at"];
  if (!updatedAt) return null;

  const timeZonedTime = utcToZonedTime(updatedAt, "Asia/Kolkata");
  let humanizedString = formatDistanceToNow(timeZonedTime, { addSuffix: true });

  const languageCode = get(config, ["publisherConfig", "language", "ietf-code"]);
  const localizationOpts = get(config, ["opts", "featureConfig", "localization"], {});

  if ("useLocaleDateStampOnGenericStory" in localizationOpts) {
    const useLocale =
      typeof localizationOpts.useLocaleDateStampOnGenericStory === "function"
        ? localizationOpts.useLocaleDateStampOnGenericStory(config)
        : localizationOpts.useLocaleDateStampOnGenericStory;

    if (useLocale) {
      humanizedString = new Date(updatedAt).toLocaleDateString(languageCode, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true
      });
    }
  }

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
