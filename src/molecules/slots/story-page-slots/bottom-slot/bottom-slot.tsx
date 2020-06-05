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

export const BottomSlot = withStoryAndConfig(BottomSlotBase);
