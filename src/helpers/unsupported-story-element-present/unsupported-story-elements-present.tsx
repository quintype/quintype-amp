import { matchStoryElement } from "../match-story-element";
import { Story } from "../../types/story";
import { Unsupported } from "../../atoms/story-elements";
import flatten from "lodash.flatten";

/**
 *
 * unsupportedStoryElementsPresent is a helper function that internally uses the helper matchStoryElement to check if there are any
 * unsupported story elements present in the story. Returns a boolean value
 *
 * @category Helper
 * @module unsupportedStoryElementsPresent
 * @param story the story object
 * @returns {boolean}
 */

export const unsupportedStoryElementsPresent = (story: Story): boolean => {
  const cards = story.cards.map((card) => card["story-elements"]);
  const flattened = flatten(cards);
  return flattened.map((storyElement) => matchStoryElement(storyElement)).includes(Unsupported);
};
