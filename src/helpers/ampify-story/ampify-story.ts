import { AmpifyStoryTypes } from "./types";
import renderToString from "../render-to-string";
import { TextStory } from "../../templates";
import get from "lodash.get";

export function ampifyStory({ story, config }: AmpifyStoryTypes) {
  // returns ready-to-render amp html. Intended to be used by publishers who donot need customizations
  const template = getTemplate({ story, config });
  return renderToString(template);
}

const getTemplate = ({ story, config }) => {
  const storyTemplate = get(story, "story-template");

  switch (storyTemplate) {
    case "text":
      return TextStory({ story, config });
    default:
      throw new Error("Couldn't resolve story template");
  }
};
