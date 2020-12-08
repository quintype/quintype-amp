import React from "react";
import { StoryProvider } from "../../context/story/story-context";
import { ConfigProvider } from "../../context/config/config-context";
import { Theme } from "../../context/theme";
import { getTokensForDarkTheme } from "../../utils/theme";
import { WebStory, CoverPage, AmpStoryAutoAds, WebStoryPageComponents, AmpStoryPage } from "../../atoms/visual-story";
import { GoogleAnalytics, QuintypeAnalytics } from "../../atoms";
import { CommonTemplateTypes } from "../common-template-types";
import { getTokensForVisualStory } from "./visual-story.helpers";
import { Card } from "../../types/story";
import get from "lodash.get";
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
  const storyId = get(story, ["id"], "");
  const sectionId = get(story, ["sections", 0, "id"], "");
  const bookendUrl = get(config, ["opts", "featureConfig", "visualStories", "bookendUrl"], "/amp/api/v1/bookend.json");
  const { TopSlot } = StoryPageSlots;

  return (
    <Providers story={story} config={config} tokens={tokens}>
      <body>
        <WebStory>
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
          <amp-story-bookend src={`${bookendUrl}?storyId=${storyId}&sectionId=${sectionId}`} layout="nodisplay" />
        </WebStory>
      </body>
    </Providers>
  );
};

export const canTakeCard = (card: Card) => {
  const storyElementWhitelist = ["text", "title", "image"];
  return card["story-elements"].some((el) => storyElementWhitelist.includes(el.type));
};

const Providers = ({ story, config, tokens, children }) => (
  <ConfigProvider value={config}>
    <StoryProvider value={story}>
      <Theme tokens={tokens}>{children}</Theme>
    </StoryProvider>
  </ConfigProvider>
);
