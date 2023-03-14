import { format, utcToZonedTime } from "date-fns-tz";
import get from "lodash.get";

import { Config, DateSettings, DateStoryTypes } from "../../types/config";
import { HumanizedDateTimeTypes } from "./types";

export const getHumanizedDateTime = ({ dateFormat, timeZone, timeStamp }: HumanizedDateTimeTypes) => {
  if (!dateFormat || !timeZone || !timeStamp)
    throw new Error("Required params not passed to getHumanizedDateTime function");
  const timeZonedTime = utcToZonedTime(timeStamp, timeZone);
  return format(timeZonedTime, dateFormat, { timeZone });
};

export function getDateSettings(config: Config, storyType: DateStoryTypes): DateSettings {
  const dateConfig = get(config, ["opts", "featureConfig", "dateConfig"], null);
  if (typeof dateConfig === "function") {
    return dateConfig(config, storyType);
  }
  return {
    enableFirstPublished: true,
    enableLastPublished: false
  };
}
