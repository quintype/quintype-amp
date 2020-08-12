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
 * bottom-slot is a story page slot. It's placed just above the bottom ad, so whatever the render prop outputs will be displayed here.
 *
 * @category Atoms
 * @module bottom-slot
 * @param {Props} props
 * @param {Story} props.story
 * @param {Config} props.config
 */
export const BottomSlot = withStoryAndConfig(BottomSlotBase);
