import { withStoryAndConfig } from "../../../../context";
import { getSlotFromConfig } from "../../helpers";

const BottomSlotBase = ({ story, config }) => {
  const bottomSlotRenderProp = getSlotFromConfig({
    config,
    slotType: "story",
    slotName: "bottom-slot"
  });
  return bottomSlotRenderProp && bottomSlotRenderProp({ story, config });
};

/**
 * BottomSlot is a render prop. It's placed just above the bottom ad, so whatever the render prop outputs will be displayed here.
 *
 * @category Atoms
 * @module BottomSlot
 */
export const BottomSlot = withStoryAndConfig(BottomSlotBase);
