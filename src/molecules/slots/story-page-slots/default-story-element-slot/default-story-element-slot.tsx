import get from "lodash.get";
import { withStoryAndConfig } from "../../../../context";

/**
 * default-story-element-slot is a story page slot. It's placed after every story element on a non live blog story.
 *
 * @category Molecules
 * @module default-story-element-slot
 * @param {Props} props
 * @param {Story} props.story
 * @param {Config} props.config
 * @param {number} props.cardIdx index of the card
 * @param {number} props.storyElementIdx index of the story element
 * @param {Card} props.storyElement gives the storyElement that's above this slot
 */

const DefaultStoryElementSlotBase = ({ story, config, cardIdx, storyElementIdx, storyElement }) => {
  const render = get(config, ["opts", "slots", "story", "default-story-element-slot"], null);
  return render && render({ story, config, cardIdx, storyElementIdx, storyElement });
};

export const DefaultStoryElementSlot = withStoryAndConfig(DefaultStoryElementSlotBase);
