import React from "react";
import { DateTime } from "../../../atoms";
import { withStoryAndConfig } from "../../../context";
import get from "lodash.get";
import { DateLastPublishedTypes } from "./types";
import { getHumanizedDateTime } from "../../../utils/date-time";

const DateLastPublishedBase = ({ config, story }: DateLastPublishedTypes) => {
  const showPublishDate = get(config, ["opts", "headerCardConfig", "dateConfig", "showPublishDate"], true);
  const publishDateFormat = get(config, ["opts", "headerCardConfig", "dateConfig", "publishDateFormat"], null);
  const publishDatePrepend = get(config, ["opts", "headerCardConfig", "dateConfig", "publishDatePrepend"], null);
  const dateTime = story["last-published-at"];

  if (!dateTime) return null;

  let formatDateTime;
  if (publishDateFormat) {
    formatDateTime = publishDateFormat;
  } else {
    formatDateTime = "do MMM, yyyy 'at' p";
  }
  const humanizedDate = getHumanizedDateTime({
    dateFormat: formatDateTime,
    timeZone: "Asia/Kolkata",
    timeStamp: dateTime
  });

  return showPublishDate && <DateTime formattedDate={humanizedDate} prepend={publishDatePrepend} />;
};

export const DateLastPublished = withStoryAndConfig(DateLastPublishedBase);
