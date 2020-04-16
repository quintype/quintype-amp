import { AmpifyStoryTypes } from "./types";
import renderToString from "../render-to-string";
import { TextStory } from "../../templates/text-story/text-story";
import get from "lodash.get";

export function ampifyStory({ story, publisherConfig, ampConfig, relatedStories, opts }: AmpifyStoryTypes) {
  // returns ready-to-render amp html. Intended to be used by publishers who donot need customizations
  const config = { publisherConfig, ampConfig };
  const relatedStoriesArr = get(relatedStories, "related-stories", []);
  const template = getTemplate({ story, config, opts, relatedStories: relatedStoriesArr });
  return renderToString(template);
}

const getTemplate = ({ story, config, opts, relatedStories }) => {
  const storyTemplate = get(story, "story-template");
  const publisherTemplates = opts && opts.templates ? opts.templates : {};

  switch (storyTemplate) {
    case "text":
      return "text" in publisherTemplates
        ? publisherTemplates["text"]({ story, config, relatedStories })
        : TextStory({ story, config, relatedStories });
    default:
      throw new Error("Couldn't resolve story template");
  }
};
