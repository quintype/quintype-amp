import React from "react";
import { Slot } from "../../../../atoms";
import { withConfig } from "../../../../context";
import { getSlotFromConfig } from "../../helpers";
import { SlotTypes } from "../../../../atoms/slot/types";

const TopSlotBase = ({ config }) => {
  const { ampHtml, script, styles }: SlotTypes = getSlotFromConfig({ config, slotType: "story", slotName: "top-slot" });
  return <Slot ampHtml={ampHtml} script={script} styles={styles} />;
};

export const TopSlot = withConfig(TopSlotBase);
