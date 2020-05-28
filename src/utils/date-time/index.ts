import { format, utcToZonedTime } from "date-fns-tz";
import { HumanizedDateTimeTypes } from "./types";

export const getHumanizedDateTime = ({ dateFormat, timeZone, timeStamp }: HumanizedDateTimeTypes) => {
  if (!dateFormat || !timeZone || !timeStamp)
    throw new Error("Required params not passed to getHumanizedDateTime function");
  const timeZonedTime = utcToZonedTime(timeStamp, timeZone);
  return format(timeZonedTime, dateFormat, { timeZone });
};
