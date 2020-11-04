import React from "react";
import { StoryProvider } from "../../context/story/story-context";
import { ConfigProvider } from "../../context/config/config-context";
import { Theme } from "../../context/theme";
import { getTokensFromAMPConfig } from "../../utils/theme";
import { WebStory, CoverPage, AmpStoryAutoAds, WebStoryPageComponents } from "../../atoms/visual-story";
import { GoogleAnalytics, QuintypeAnalytics } from "../../atoms";
import { CommonTemplateTypes } from "../common-template-types";
import { Card } from "../../types/story";
import merge from "lodash.merge";
import { invertHexColor } from "../../helpers";
import defaultTokens from "../../context/theme/tokens";
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
  return card["story-elements"].reduce((acc, storyEl) => {
    if (!acc) return storyElementWhitelist.includes(storyEl.type);
    return true;
  }, false);
};

const getTokensForDarkTheme = (config) => {
  const tokensFromConfig = getTokensFromAMPConfig(config.ampConfig);
  const darkThemeDefaultTokens = {
    color: {
      mono1: invertHexColor(defaultTokens.color.mono1),
      mono2: invertHexColor(defaultTokens.color.mono2),
      mono3: invertHexColor(defaultTokens.color.mono3),
      mono4: invertHexColor(defaultTokens.color.mono4),
      mono5: invertHexColor(defaultTokens.color.mono5),
      mono6: invertHexColor(defaultTokens.color.mono6),
      mono7: invertHexColor(defaultTokens.color.mono7)
    }
  };
  const tokens = merge(darkThemeDefaultTokens, tokensFromConfig);
  return tokens;
};

const Providers = ({ story, config, tokens, children }) => (
  <ConfigProvider value={config}>
    <StoryProvider value={story}>
      <Theme tokens={tokens}>{children}</Theme>
    </StoryProvider>
  </ConfigProvider>
);
