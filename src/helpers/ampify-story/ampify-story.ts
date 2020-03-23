import { AmpifyStoryTypes } from "./types";
import renderToString from "../render-to-string";
import { TextStory } from "../../templates";
import get from "lodash.get";

export function ampifyStory({ story, publisherConfig, ampConfig, opts }: AmpifyStoryTypes) {
  // returns ready-to-render amp html. Intended to be used by publishers who donot need customizations
  const config = { publisherConfig, ampConfig };
  const template = getTemplate({ story, config, opts });
  return renderToString(template);
}

const getTemplate = ({ story, config, opts }) => {
  const storyTemplate = get(story, "story-template");
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
