import get from "lodash.get";
import { Config } from "../../../types/config";

interface GetSlotFromConfigPropsTypes {
  config: Config;
  slotType: "story" | "home" | "section";
  slotName:
    | "top-slot"
    | "bottom-slot"
    | "live-blog-card-slot"
    | "default-story-card-slot"
    | "default-story-element-slot"
    | "related-story-card-slot";
}

export const getSlotFromConfig = ({ config, slotType, slotName }: GetSlotFromConfigPropsTypes) => {
  return get(config, ["opts", "slots", slotType, slotName], null);
};
