import get from "lodash.get";
import { Config } from "../../../types/config";

interface GetSlotFromConfigPropsTypes {
  config: Config;
  slotType: "story" | "home" | "section";
  slotName: "top-slot" | "body-slot" | "bottom-slot";
}

export const getSlotFromConfig = ({ config, slotType, slotName }: GetSlotFromConfigPropsTypes) => {
  const slot = get(config, ["opts", "slots", slotType, slotName], null);
  return { ampHtml: get(slot, "ampHtml", null), script: get(slot, "script", null), styles: get(slot, "slot", null) };
};
