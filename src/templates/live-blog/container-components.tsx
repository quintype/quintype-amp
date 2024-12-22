import React from "react";
import { DateTime } from "../../atoms";
import { DateLineWrapper } from "./presentational-components";
import { CardUpdatedAtTypes } from "./types";
import { getHumanizedDateTime } from "../../utils/date-time";
import get from "lodash.get";
import { withStoryAndConfig } from "../../context";
import { getLocalizedWord } from "../../utils/localize-words/localization";

export const CardUpdatedAtBase = ({ story, config, timeStamp, card }: CardUpdatedAtTypes) => {
  if (!timeStamp) return null;

  const cardTimeStampRender = get(config, ["opts", "render", "liveBlogCardTimeStamp"], null);
  const languageCode = get(config, ["publisherConfig", "language", "ietf-code"]);
  const timeZone = get(config, ["additionalConfig", "general", "timeZone"], "Asia/Kolkata");
  const localizationOpts = get(config, ["opts", "featureConfig", "localization"], {});

  if (cardTimeStampRender) return cardTimeStampRender({ story, config, card });

  let humanizedDate = getHumanizedDateTime({
    dateFormat: "do MMM, yyyy 'at' p",
    timeZone: "Asia/Kolkata",
    timeStamp
  });

  if ("useLocaleDateStampOnGenericStory" in localizationOpts) {
    const useLocale =
      typeof localizationOpts.useLocaleDateStampOnGenericStory === "function"
        ? localizationOpts.useLocaleDateStampOnGenericStory(config)
        : localizationOpts.useLocaleDateStampOnGenericStory;

    if (useLocale) {
      humanizedDate = new Date(timeStamp).toLocaleDateString(languageCode, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone
      });
    }
  }

  return (
    <DateLineWrapper>
      <DateTime formattedDate={humanizedDate} prepend={getLocalizedWord(config, "updatedAt", "Updated at:")} />
    </DateLineWrapper>
  );
};

export const CardUpdatedAt = withStoryAndConfig(CardUpdatedAtBase);
