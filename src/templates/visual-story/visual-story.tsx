import React from "react";
import { StoryProvider } from "../../context/story/story-context";
import { ConfigProvider } from "../../context/config/config-context";
import { Theme } from "../../context/theme";
import { getTokensForDarkTheme } from "../../utils/theme";
import { WebStory, CoverPage, AmpStoryAutoAds, WebStoryPageComponents, AmpStoryPage } from "../../atoms/visual-story";
import { GoogleTagManager, GoogleAnalytics, QuintypeAnalytics, Fonts } from "../../atoms";
import { CommonTemplateTypes } from "../common-template-types";
import { getTokensForVisualStory } from "./visual-story.helpers";
import { Card } from "../../types/story";
import merge from "lodash.merge";
import { StoryPageSlots } from "../../molecules/slots";

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
          .map((card) => {
            // // tslint:disable-next-line:no-console
            // console.log("Inside visual-story.tsx --->", card)
            return (
              <AmpStoryPage key={card.id} id={card.id}>
                <WebStoryPageComponents card={card} />
              </AmpStoryPage>
            );
          })}
        <GoogleAnalytics />
        <QuintypeAnalytics />
      </WebStory>
    </Providers>
  );
};

export const canTakeCard = (card: Card) => {
  const storyElementWhitelist = ["text", "title", "image", "jsembed"];
  return card["story-elements"].some((el) => storyElementWhitelist.includes(el.type));
};

const Providers = ({ story, config, tokens, children }) => (
  <ConfigProvider value={config}>
    <StoryProvider value={story}>
      <Theme tokens={tokens}>{children}</Theme>
    </StoryProvider>
  </ConfigProvider>
);
