import { AmpifyStoryTypes } from "./types";
import renderToString from "../render-to-string";
import { GenericStory } from "../../templates";
import get from "lodash.get";
import React from "react";

export function ampifyStory({
  story,
  publisherConfig,
  ampConfig,
  relatedStories,
  seo = "",
  opts = {},
  infiniteScrollInlineConfig
}: AmpifyStoryTypes) {
  const config = { publisherConfig, ampConfig, opts };
  const template = getTemplate({ story, config, relatedStories, infiniteScrollInlineConfig });
  return renderToString(template, seo);
}

const getTemplate = ({ story, config, relatedStories, infiniteScrollInlineConfig }) => {
  const storyType = get(story, "story-template");
  const customTemplate = get(config, ["opts", "templates", storyType], null);
  const propsForTemplate = {
    story,
    config,
    relatedStories,
    infiniteScrollInlineConfig
  };
  if (customTemplate) return customTemplate(propsForTemplate);

  switch (storyType) {
    default:
      return <GenericStory {...propsForTemplate} />;
  }
};
