import { withStoryAndConfig } from "../../../../../context";
import { getSlotFromConfig } from "../../../helpers";

const LiveBlogCardSlotBase = ({ story, config, index }) => {
  const liveBlogCardRender = getSlotFromConfig({
    config,
    slotType: "story",
    slotName: "live-blog-card"
  });
  return liveBlogCardRender && liveBlogCardRender({ story, config, index });
};

/**
 * LiveBlogCardSlot is a render prop. It's placed after every card on a live blog type story.
 *
 * @category Atoms
 * @component
 * @param {Props} props
 * @param {Story} props.story
 * @param {Config} props.config
 * @param {number} props.index the index of the card
 */
export const LiveBlogCardSlot = withStoryAndConfig(LiveBlogCardSlotBase);
