import get from "lodash.get";
import { Config } from "../../../types/config";
import { Story } from "./../../../types/story";

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
  // support for different styles for different stories
  const visualStoryTheme = get(story, ["metadata", "story-attributes", "visualstorytheme"]) || [];
  const theme = visualStoryTheme[0];
  switch (theme) {
    case "theme-2":
      const themeConfig2 = visualStoriesConfig[1];
      const imgAnimationFeatCfg2 = get(themeConfig2, ["animation", "image"]) || {};
      return {
        ...(imgAnimationFeatCfg2.animateIn && { "animate-in": imgAnimationFeatCfg2.animateIn }),
        ...(imgAnimationFeatCfg2.animateInDelay && { "animate-in-delay": imgAnimationFeatCfg2.animateInDelay }),
        ...(imgAnimationFeatCfg2.animateInDuration && { "animate-in-duration": imgAnimationFeatCfg2.animateInDuration })
      };
    case "theme-3":
      const themeConfig3 = visualStoriesConfig[2];
      const imgAnimationFeatCfg3 = get(themeConfig3, ["animation", "image"]) || {};
      return {
        ...(imgAnimationFeatCfg3.animateIn && { "animate-in": imgAnimationFeatCfg3.animateIn }),
        ...(imgAnimationFeatCfg3.animateInDelay && { "animate-in-delay": imgAnimationFeatCfg3.animateInDelay }),
        ...(imgAnimationFeatCfg3.animateInDuration && { "animate-in-duration": imgAnimationFeatCfg3.animateInDuration })
      };
    default:
      const themeConfig = visualStoriesConfig[0];
      const imgAnimationFeatConfig = get(themeConfig, ["animation", "image"]) || {};
      return {
        ...(imgAnimationFeatConfig.animateIn && { "animate-in": imgAnimationFeatConfig.animateIn }),
        ...(imgAnimationFeatConfig.animateInDelay && { "animate-in-delay": imgAnimationFeatConfig.animateInDelay }),
        ...(imgAnimationFeatConfig.animateInDuration && {
          "animate-in-duration": imgAnimationFeatConfig.animateInDuration
        })
      };
  }
};
