import React from "react";
import { Slot } from "../../../../atoms";
import { withConfig } from "../../../../context";
import { getSlotFromConfig } from "../../helpers";
import { SlotType } from "../../../../types/config";

const TopSlotBase = ({ config }) => {
  const { ampHtml, script, styles }: SlotType = getSlotFromConfig({
    config,
    slotType: "story",
    slotName: "top-slot"
  });
  return ampHtml ? <Slot ampHtml={ampHtml} script={script} styles={styles} /> : null;
};

export const TopSlot = withConfig(TopSlotBase);
