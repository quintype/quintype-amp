import get from "lodash.get";
import { Config } from "../../../types/config";
import { Story } from "./../../../types/story";
import { getVisualStoryImgConfig } from "./../../../utils/visual-story-config";

export const getImageAnimationProps = (config: Config, story: Story) => {
  const visualStoriesConfig = get(config, ["opts", "featureConfig", "visualStories"]) || null;

  if (!Array.isArray(visualStoriesConfig)) {
    // default to existing logic
    const imgAnimationFeatCfg = get(config, ["opts", "featureConfig", "visualStories", "animation", "image"], null);
    if (!imgAnimationFeatCfg) return null;
    return {
      ...(imgAnimationFeatCfg.animateIn && { "animate-in": imgAnimationFeatCfg.animateIn }),
      ...(imgAnimationFeatCfg.animateInDelay && { "animate-in-delay": imgAnimationFeatCfg.animateInDelay }),
      ...(imgAnimationFeatCfg.animateInDuration && { "animate-in-duration": imgAnimationFeatCfg.animateInDuration })
    };
  }
  return getVisualStoryImgConfig(config, story);
};
