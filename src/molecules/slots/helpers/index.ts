import get from "lodash.get";
import { Config } from "../../../types/config";

interface GetSlotFromConfigPropsTypes {
  config: Config;
  slotType: "story" | "home" | "section";
  slotName: "top-slot" | "body-slot" | "bottom-slot";
}

export const getSlotFromConfig = ({ config, slotType, slotName }: GetSlotFromConfigPropsTypes) =>
  get(config, ["opts", "slots", slotType, slotName]);
