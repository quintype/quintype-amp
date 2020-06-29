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
 * TopSlot is a render prop. It's placed just below the top ad, so whatever the render prop outputs will be displayed here.
 *
 * @category Atoms
 * @module TopSlot
 */
export const TopSlot = withStoryAndConfig(TopSlotBase);
