import { withStoryAndConfig } from "../../../../context";
import { getSlotFromConfig } from "../../helpers";

const RelatedStoryCardSlotBase = ({ story, config, index, relatedStory }) => {
  const relatedStoryCardRender = getSlotFromConfig({
    config,
    slotType: "story",
    slotName: "related-story-card-slot"
  });
  return relatedStoryCardRender && relatedStoryCardRender({ story, config, index, relatedStory });
};

/**
 * related-story-card-slot is a story page slot. It's placed after every related story card.
 *
 * @category Molecules
 * @module related-story-card-slot
 * @param {Props} props
 * @param {Story} props.story
 * @param {Config} props.config
 * @param {number} props.index index of the card. For example the slot coming after the 1st card will have index 0 and so on
 * @param {Story} props.relatedStory The related story that is above this slot
 */
export const RelatedStoryCardSlot = withStoryAndConfig(RelatedStoryCardSlotBase);
