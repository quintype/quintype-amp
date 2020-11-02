import React from "react";
import { StoryProvider } from "../../context/story/story-context";
import { ConfigProvider } from "../../context/config/config-context";
import { Theme } from "../../context/theme";
import { getTokensFromAMPConfig } from "../../utils/theme";
import { WebStory, CoverPage, AmpStoryAutoAds } from "../../atoms/visual-story";
import { CommonTemplateTypes } from "../common-template-types";

export const VisualStory = ({ story, config }: CommonTemplateTypes) => {
  const tokens = getTokensFromAMPConfig(config.ampConfig);
  // const storyElementWhitelist = ["text", "title", "image"];
  return (
    <Providers story={story} config={config} tokens={tokens}>
      <body>
        <WebStory>
          <AmpStoryAutoAds />
          <CoverPage />
          {/* {story.cards.map((card) => {
            return card["story-elements"].filter((el) => storyElementWhitelist.includes(el.type)).map((el) => {});
          })} */}
          <amp-story-page id="amp-story-0">
            <amp-story-grid-layer template="fill">
              <amp-img
                animate-in="zoom-in"
                animate-in-duration="120s"
                width="480"
                height="640"
                layout="responsive"
                alt="aa"
                src="https://images.unsplash.com/photo-1603902552923-135b4049e1a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              />
            </amp-story-grid-layer>
          </amp-story-page>
          <amp-story-page id="amp-story-1">
            <amp-story-grid-layer template="fill">
              <amp-img
                animate-in="fade-in"
                animate-in-duration="50s"
                width="480"
                height="640"
                layout="responsive"
                alt="aa"
                src="https://images.unsplash.com/photo-1603994457350-5cc9f6c1279e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              />
            </amp-story-grid-layer>
          </amp-story-page>
        </WebStory>
      </body>
    </Providers>
  );
};

const Providers = ({ story, config, tokens, children }) => (
  <ConfigProvider value={config}>
    <StoryProvider value={story}>
      <Theme tokens={tokens}>{children}</Theme>
    </StoryProvider>
  </ConfigProvider>
);
