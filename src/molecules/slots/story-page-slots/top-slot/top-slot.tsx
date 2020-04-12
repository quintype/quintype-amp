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
  if (!ampHtml)
    throw new Error(
      `Problem encountered in TopSlot - couldn't find slot html. You probably included the TopSlot component but didn't provide it with required data`
    );
  return <Slot ampHtml={ampHtml} script={script} styles={styles} />;
};

export const TopSlot = withConfig(TopSlotBase);
