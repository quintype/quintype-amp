import { matchStoryElement } from "../match-story-element";
import { Story } from "../../types/story";
import { Unsupported } from "../../atoms/story-elements";

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
  return story.cards
    .flatMap((card) => card["story-elements"])
    .map((storyElement) => matchStoryElement(storyElement))
    .includes(Unsupported);
};
