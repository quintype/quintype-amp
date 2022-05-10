import React from "react";
import { DateTime } from "../../atoms";
import { DateLineWrapper } from "./presentational-components";
import { CardUpdatedAtTypes } from "./types";
import { getHumanizedDateTime } from "../../utils/date-time";
import get from "lodash.get";
import { withStoryAndConfig } from "../../context";

export const CardUpdatedAtBase = ({ story, config, timeStamp, card }: CardUpdatedAtTypes) => {
  if (!timeStamp) return null;

  const cardTimeStampRender = get(config, ["opts", "render", "liveBlogCardTimeStamp"], null);
  if (cardTimeStampRender) return cardTimeStampRender({ story, config, card });

  const humanizedDate = getHumanizedDateTime({
    dateFormat: "do MMM, yyyy 'at' p",
    timeZone: "Asia/Kolkata",
    timeStamp
  });
  return (
    <DateLineWrapper>
      <DateTime formattedDate={humanizedDate} prepend="Updated at:" />
    </DateLineWrapper>
  );
};

export const CardUpdatedAt = withStoryAndConfig(CardUpdatedAtBase);
