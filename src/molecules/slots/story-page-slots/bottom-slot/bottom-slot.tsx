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
  if (!ampHtml)
    throw new Error(
      `Problem encountered in BottomSlot - couldn't find slot html. You probably included the BottomSlot component but didn't provide it with required data`
    );
  return <Slot ampHtml={ampHtml} script={script} styles={styles} />;
};

export const BottomSlot = withConfig(BottomSlotBase);
