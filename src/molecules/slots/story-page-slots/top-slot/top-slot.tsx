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

export const TopSlot = withStoryAndConfig(TopSlotBase);
