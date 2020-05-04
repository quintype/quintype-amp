import { AmpifyStoryTypes } from "./types";
import renderToString from "../render-to-string";
import { TextStory } from "../../templates/text-story/text-story";
import get from "lodash.get";
import React from "react";

export function ampifyStory({
  story,
  publisherConfig,
  ampConfig,
  relatedStories,
  opts = {},
  seoTags
}: AmpifyStoryTypes) {
  const config = { publisherConfig, ampConfig, opts };
  const template = getTemplate({ story, config, relatedStories });
  return renderToString(template, seoTags.toString());
}

const getTemplate = ({ story, config, relatedStories }) => {
  const storyTemplate = get(story, "story-template");
  const opts = get(config, "opts", null);
  const publisherTemplates = opts && opts.templates ? opts.templates : {};

  switch (storyTemplate) {
    case "text":
      return "text" in publisherTemplates ? (
        publisherTemplates.text({ story, config, relatedStories })
      ) : (
        <TextStory story={story} config={config} relatedStories={relatedStories} />
      );
    default:
      throw new Error("Couldn't resolve story template");
  }
};
