import get from "lodash.get";
import { Config } from "../../../types/config";
import { Story } from "./../../../types/story";
import { getAnimation, getVisualStoryConfig } from "./../../../utils/visual-story-config";

export const getAnimationProps = (config: Config, story: Story) => {
  const visualStoriesConfig = get(config, ["opts", "featureConfig", "visualStories"]) || null;

  if (!Array.isArray(visualStoriesConfig)) {
    // default to existing logic
    const imgAnimationFeatCfg = get(config, ["opts", "featureConfig", "visualStories", "animation", "image"], null);
    if (!imgAnimationFeatCfg) return {};
    return getAnimation(imgAnimationFeatCfg, {});
  }
  return getVisualStoryConfig(config, story);
};
