import React from "react";
import get from "lodash.get";
import { DateTime } from "../../../atoms";
import { withStoryAndConfig } from "../../../context";
import { DateLastPublishedTypes } from "./types";
import { getHumanizedDateTime } from "../../../utils/date-time";

export const DateLastPublishedBase = ({ story, format, prepend, config }: DateLastPublishedTypes) => {
  const dateTime = story["last-published-at"];
  if (!dateTime) return null;

  const languageCode = get(config, ["publisherConfig", "language", "ietf-code"]);
  const localizationOpts = get(config, ["opts", "featureConfig", "localization"], {});

  if ("useLocaleDateStampOnGenericStory" in localizationOpts) {
    const useLocale =
      typeof localizationOpts.useLocaleDateStampOnGenericStory === "function"
        ? localizationOpts.useLocaleDateStampOnGenericStory(config)
        : localizationOpts.useLocaleDateStampOnGenericStory;

    if (useLocale) {
      const date = new Date(dateTime).toLocaleDateString(languageCode);
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

/**
 * DateLastPublished Component - uses library "date-fns-tz" to format the story publish date. Uses the "DateTime" atomic component internally
 *
 * ```js
 * <DateLastPublished format="pp 'on' do MM yyyy" prepend="Date of publication: " />
 * ```
 *
 * @param {Object} props Object containing parameters passed to the render prop
 * @param {String|Component} props.prepend Optional. String or Component (logo) that is prepended
 * @param {String} props.format Optional. String that is used to format date. The default is "do MMM, yyyy 'at' p". For formatting info, check [the date-fns Docs]{@link https://date-fns.org/docs/format}
 *
 *  @category Molecules
 * @component
 */

export const DateLastPublished = withStoryAndConfig(DateLastPublishedBase);
