import React from "react";
import { StoryProvider } from "../../context/story/story-context";
import { ConfigProvider } from "../../context/config/config-context";
import { Theme } from "../../context/theme";
import { getTokensForDarkTheme } from "../../utils/theme";
import { WebStory, CoverPage, AmpStoryAutoAds, WebStoryPageComponents } from "../../atoms/visual-story";
import { GoogleAnalytics, QuintypeAnalytics } from "../../atoms";
import { CommonTemplateTypes } from "../common-template-types";
import { Card } from "../../types/story";
import get from "lodash.get";

export const VisualStory = ({ story, config }: CommonTemplateTypes) => {
  const tokens = getTokensForDarkTheme(config);
  const storyId = get(story, ["id"], "");
  const sectionId = get(story, ["sections", 0, "id"], "");
  return (
    <Providers story={story} config={config} tokens={tokens}>
      <body>
        <WebStory>
          <AmpStoryAutoAds />
          <CoverPage />
          {story.cards
            .filter((card) => canTakeCard(card))
            .map((card) => (
              <amp-story-page key={card.id} id={card.id}>
                <WebStoryPageComponents card={card} />
              </amp-story-page>
            ))}
          <GoogleAnalytics />
          <QuintypeAnalytics />
          <amp-story-bookend
            src={`/amp/api/v1/bookend.json?storyId=${storyId}&sectionId=${sectionId}`}
            layout="nodisplay"
          />
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
