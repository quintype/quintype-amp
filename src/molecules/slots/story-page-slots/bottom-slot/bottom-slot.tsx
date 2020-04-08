import React from "react";
import { Slot } from "../../../../atoms";
import { withConfig } from "../../../../context";
import { getSlotFromConfig } from "../../helpers";
import { SlotType } from "../../../../types/config";

const BottomSlotBase = ({ config }) => {
  const { ampHtml, script, styles }: SlotType = getSlotFromConfig({
    config,
    slotType: "story",
    slotName: "bottom-slot"
  });
  return <Slot ampHtml={ampHtml} script={script} styles={styles} />;
};

export const BottomSlot = withConfig(BottomSlotBase);
