import { AmpifyStoryTypes } from "./types";
import renderToString from "../render-to-string";
import { TextStory } from "../../templates/text-story/text-story";
import get from "lodash.get";

export function ampifyStory({ story, publisherConfig, ampConfig, opts = {} }: AmpifyStoryTypes) {
  const config = { publisherConfig, ampConfig, opts };
  const template = getTemplate({ story, config });
  return renderToString(template);
}

const getTemplate = ({ story, config }) => {
  const storyTemplate = get(story, "story-template");
  const opts = get(config, "opts", null);
  const publisherTemplates = opts && opts.templates ? opts.templates : {};

  switch (storyTemplate) {
    case "text":
      return "text" in publisherTemplates
        ? publisherTemplates["text"]({ story, config })
        : TextStory({ story, config });
    default:
      throw new Error("Couldn't resolve story template");
  }
};
