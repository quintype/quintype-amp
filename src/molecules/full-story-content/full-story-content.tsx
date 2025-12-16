// This file should not exist. Move all components inside appropriate atoms/molecules

import React from "react";
import { Spacer, StoryElement } from "../../atoms";
import { Fragment } from "react";
import { BodyAd } from "../ads";
import { StoryPageSlots } from "../slots";
import get from "lodash.get";
import { BODY_AD_MAX_LIMIT, BODY_WIDGET_MAX_LIMIT } from "../../constants";
import { decodeB64, isBase64 } from "../../utils/utils";
import { AdWrapper } from "../ads/shared/components";

const { DefaultStoryCardSlot } = StoryPageSlots;

// Renders all the cards in the story
export const FullStoryContent = ({ story, config }) => {
  const counter = { ads: 0, paragraphs: 0 };
  // checking for body-ads key
  const bodyAdsConfig = get(config, ["ampConfig", "doubleclick", "body-ads"], null);
  const hasMultipleBodyAds = Array.isArray(bodyAdsConfig) && bodyAdsConfig.length > 0;
  const bodyAdsToRender = (bodyAdsConfig || []).slice(0, BODY_AD_MAX_LIMIT);

  const customAmpWidgets = get(config, ["opts", "customAmpWidgets"]);
  const widgets =
    get(config, ["additionalConfig", "story", "ampWidgets"]) ||
    (typeof customAmpWidgets === "function" ? customAmpWidgets() : customAmpWidgets);

  const widgetArray = Array.isArray(widgets) ? widgets : [];

  const bodyWidgetsToRender = widgetArray.slice(0, BODY_WIDGET_MAX_LIMIT);
  const enabledWidgets = bodyWidgetsToRender.filter((w) => w?.enable && w?.code);

  return story.cards.map((card, cardIdx) => {
    const customCardRender = get(config, ["opts", "render", "storyCardRenderProps"], {});
    const cardtype = get(card, ["metadata", "attributes", "cardtype", "0"], "");
    if (customCardRender[cardtype] && typeof customCardRender[cardtype] === "function") {
      return customCardRender[cardtype]({ story, config, card, counter });
    }
    const adSlot = hasMultipleBodyAds ? bodyAdsToRender[cardIdx] : undefined;

    const slot = bodyWidgetsToRender[cardIdx];

    const widgetSlot =
      cardIdx < BODY_WIDGET_MAX_LIMIT && slot?.enable ? (isBase64(slot.code) ? decodeB64(slot.code) : slot.code) : null;

    return (
      <Fragment key={card.id}>
        {card["story-elements"].map((element, storyElementIdx) => (
          <StoryElement
            key={element.id}
            element={element}
            cardIdx={cardIdx}
            storyElementIdx={storyElementIdx}
            counter={counter}
          />
        ))}
        {enabledWidgets.length > 0 ? (
          <>
            {cardIdx === 0 && <BodyAd templateName="default" />}
            {widgetSlot && (
              <AdWrapper>
                <div dangerouslySetInnerHTML={{ __html: widgetSlot }} />
                <Spacer token="s" />
              </AdWrapper>
            )}
          </>
        ) : hasMultipleBodyAds ? (
          adSlot && <BodyAd adSlot={adSlot} templateName="default" />
        ) : (
          cardIdx === 0 && <BodyAd templateName="default" />
        )}
        <DefaultStoryCardSlot index={cardIdx} card={card} />
      </Fragment>
    );
  });
};
