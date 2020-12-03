import get from "lodash.get";
import { Config } from "../../../types/config";

export const getImageAnimationProps = (config: Config) => {
  const imgAnimationFeatCfg = get(config, ["opts", "featureConfig", "visualStories", "animation", "image"], null);
  if (!imgAnimationFeatCfg) return null;

  return {
    "animate-in": imgAnimationFeatCfg.animateIn || "zoom-in",
    ...(imgAnimationFeatCfg.animateInDelay && { "animate-in-delay": imgAnimationFeatCfg.animateInDelay }),
    ...(imgAnimationFeatCfg.animateInDuration && { "animate-in-duration": imgAnimationFeatCfg.animateInDuration })
  };
};
