import get from "lodash.get";
import { Config } from "../../../types/config";
import { Story } from "./../../../types/story";
import { getAnimation, getVisualStoryConfig } from "./../../../utils/visual-story-config";

export const getAnimationProps = (config: Config, story: Story) => {
  const featureConfig = get(config, ["opts", "featureConfig"], null);
  const visualStoriesConfig = get(config, ["opts", "featureConfig", "visualStories"]) || null;

  if (featureConfig && !Array.isArray(visualStoriesConfig)) {
    // default to existing logic
    const imgAnimationFeatCfg = get(config, ["opts", "featureConfig", "visualStories", "animation", "image"], null);
    if (!imgAnimationFeatCfg)
      // default animation for zoom-in
      return {
        imageAnimation: {
          "animate-in": "zoom-in",
          "animate-in-delay": "1s",
          "animate-in-duration": "10s"
        },
        text: {}
      };

    return getAnimation(imgAnimationFeatCfg, {});
  }
  return getVisualStoryConfig(config, story);
};
