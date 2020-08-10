import { withStoryAndConfig } from "../../../../context";
import { getSlotFromConfig } from "../../helpers";

const TopSlotBase = ({ story, config }) => {
  const topSlotRenderProp = getSlotFromConfig({
    config,
    slotType: "story",
    slotName: "top-slot"
  });
  return topSlotRenderProp && topSlotRenderProp({ story, config });
};

/**
 * top-slot is a story page slot. It's placed just below the top ad, so whatever the render prop outputs will be displayed here.
 *
 * @category Atoms
 * @module top-slot
 * @param {Props} props
 * @param {Story} props.story
 * @param {Config} props.config
 */
export const TopSlot = withStoryAndConfig(TopSlotBase);
