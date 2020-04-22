import { AmpifyStoryTypes } from "./types";
import renderToString from "../render-to-string";
import { TextStory } from "../../templates/text-story/text-story";
import get from "lodash.get";

export function ampifyStory({
  story,
  publisherConfig,
  ampConfig,
  relatedStories: relatedStoriesObj,
  opts = {}
}: AmpifyStoryTypes) {
  const config = { publisherConfig, ampConfig, opts };
  const relatedStories = get(relatedStoriesObj, "related-stories", []);
  const template = getTemplate({ story, config, relatedStories });
  return renderToString(template);
}

const getTemplate = ({ story, config, relatedStories }) => {
  const storyTemplate = get(story, "story-template");
  const opts = get(config, "opts", null);
  const publisherTemplates = opts && opts.templates ? opts.templates : {};

  switch (storyTemplate) {
    case "text":
      return "text" in publisherTemplates
        ? publisherTemplates.text({ story, config, relatedStories })
        : TextStory({ story, config, relatedStories });
    default:
      throw new Error("Couldn't resolve story template");
  }
};
