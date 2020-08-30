import { withStoryAndConfig } from "../../../../context";
import { getSlotFromConfig } from "../../helpers";

const DefaultStoryCardSlotBase = ({ story, config, index, card }) => {
  const defaultStoryCardRender = getSlotFromConfig({
    config,
    slotType: "story",
    slotName: "default-story-card-slot"
  });
  return defaultStoryCardRender && defaultStoryCardRender({ story, config, index, card });
};

/**
 * default-story-card-slot is a story page slot. It's placed after every card on a non live blog story.
 *
 * @category Molecules
 * @module default-story-card-slot
 * @param {Props} props
 * @param {Story} props.story
 * @param {Config} props.config
 * @param {number} props.index index of the card. For example the default-story-card-slot coming after the 1st card will have index 0 and so on
 * @param {Card} props.card gives the card that's above this slot
 */
export const DefaultStoryCardSlot = withStoryAndConfig(DefaultStoryCardSlotBase);
