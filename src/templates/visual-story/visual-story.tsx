import React from "react";
import { StoryProvider } from "../../context/story/story-context";
import { ConfigProvider } from "../../context/config/config-context";
import { Theme } from "../../context/theme";
import { getTokensForDarkTheme } from "../../utils/theme";
import { WebStory, CoverPage, AmpStoryAutoAds, WebStoryPageComponents, AmpStoryPage } from "../../atoms/visual-story";
import { ComScore, GoogleTagManager, GoogleAnalytics, QuintypeAnalytics, Fonts } from "../../atoms";
import { CommonTemplateTypes } from "../common-template-types";
import { getTokensForVisualStory } from "./visual-story.helpers";
import { Card } from "../../types/story";
import merge from "lodash.merge";
import { StoryPageSlots } from "../../molecules/slots";
import atob from "atob-utf-8";

/**
 * The VisualStory template is rendered when the story-template is `visual-story`
 *
 * Slots: top-slot
 *
 * @category Default Templates
 * @component
 */
export const VisualStory = ({ story, config }: CommonTemplateTypes) => {
  const tokens = merge({}, getTokensForDarkTheme(config), getTokensForVisualStory());
  const { TopSlot } = StoryPageSlots;

  return (
    <Providers story={story} config={config} tokens={tokens}>
      <WebStory>
        <GoogleTagManager />
        <Fonts />
        <TopSlot />
        <AmpStoryAutoAds />
        <CoverPage />
        {story.cards
          .filter((card) => canTakeCard(card))
          .map((card) => (
            <AmpStoryPage key={card.id} id={card.id}>
              <WebStoryPageComponents card={card} />
            </AmpStoryPage>
          ))}
        <GoogleAnalytics />
        <QuintypeAnalytics />
        <ComScore />
      </WebStory>
    </Providers>
  );
};

export const canTakeCard = (card: Card) => {
  const storyElementWhitelist = ["text", "title", "image", "video"];
  const validCards = card["story-elements"].some((el) => {
    if (el.type === "jsembed") {
      const videoUrl = el && atob(`${el["embed-js"]}`);
      const formatWhitelist = ["mp4", "webm", "ogv"];
      const isValidVideoUrl = formatWhitelist.some((format) => {
        return videoUrl && videoUrl.endsWith(format);
      });
      return isValidVideoUrl;
    }
    return storyElementWhitelist.includes(el.type);
  });
  return validCards;
};

const Providers = ({ story, config, tokens, children }) => (
  <ConfigProvider value={config}>
    <StoryProvider value={story}>
      <Theme tokens={tokens}>{children}</Theme>
    </StoryProvider>
  </ConfigProvider>
);
