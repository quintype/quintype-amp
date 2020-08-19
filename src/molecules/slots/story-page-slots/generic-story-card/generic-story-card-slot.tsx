import { withStoryAndConfig } from "../../../../context";
import { getSlotFromConfig } from "../../helpers";

const GenericStoryCardSlotBase = ({ story, config, index, card }) => {
  const genericStoryCardRender = getSlotFromConfig({
    config,
    slotType: "story",
    slotName: "generic-story-card-slot"
  });
  return genericStoryCardRender && genericStoryCardRender({ story, config, index, card });
};

/**
 * generic-story-card-slot is a story page slot. It's placed after every card on a generic (default) story.
 *
 * @category Atoms
 * @module generic-story-card-slot
 * @param {Props} props
 * @param {Story} props.story
 * @param {Config} props.config
 * @param {number} props.index index of the card. For example the GenericStoryCardSlot coming after the 1st card will have index 0 and so on
 * @param {Card} props.card gives the card that's above this slot
 */
export const GenericStoryCardSlot = withStoryAndConfig(GenericStoryCardSlotBase);
