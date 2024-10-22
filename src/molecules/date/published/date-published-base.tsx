import React from "react";
import get from "lodash.get";
import { DateTime } from "../../../atoms";
import { DatePublishedTypes } from "./types";
import { getHumanizedDateTime } from "../../../utils/date-time";

export const DatePublishedBase = ({ story, format, prepend, config, type = "first" }: DatePublishedTypes) => {
  const dateTime = type === "first" ? story["first-published-at"] : story["last-published-at"];
  if (!dateTime) return null;

  const languageCode = get(config, ["publisherConfig", "language", "ietf-code"], "en");
  const localizationOpts = get(config, ["opts", "featureConfig", "localization"], {});
  const timeZone = get(config, ["additionalConfig", "general", "timeZone"], "Asia/Kolkata");

  if ("useLocaleDateStampOnGenericStory" in localizationOpts) {
    const useLocale =
      typeof localizationOpts.useLocaleDateStampOnGenericStory === "function"
        ? localizationOpts.useLocaleDateStampOnGenericStory(config)
        : localizationOpts.useLocaleDateStampOnGenericStory;

    if (useLocale) {
      const date = new Date(dateTime).toLocaleDateString(languageCode, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: timeZone
      });
      return <DateTime formattedDate={date} prepend={prepend} />;
    }
  }

  const formatDateTime = format || "do MMM, yyyy 'at' p";
  const humanizedDate = getHumanizedDateTime({
    dateFormat: formatDateTime,
    timeZone: "Asia/Kolkata",
    timeStamp: dateTime
  });

  return <DateTime formattedDate={humanizedDate} prepend={prepend} />;
};
