import { withStoryAndConfig } from "../../../../../context";
import { getSlotFromConfig } from "../../../helpers";

const LiveBlogCardSlotBase = ({ story, config, index }) => {
  const liveBlogCardRender = getSlotFromConfig({
    config,
    slotType: "story",
    slotName: "live-blog-card-slot"
  });
  return liveBlogCardRender && liveBlogCardRender({ story, config, index });
};

/**
 * live-blog-card is a story page slot. It's placed after every card on a live blog type story.
 *
 * @category Atoms
 * @module live-blog-card
 * @param {Props} props
 * @param {Story} props.story
 * @param {Config} props.config
 * @param {number} props.index index of the card. For example the LiveBlogCardSlot coming after the 1st card will have index 0 and so on
 */
export const LiveBlogCardSlot = withStoryAndConfig(LiveBlogCardSlotBase);
