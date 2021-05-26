import get from "lodash.get";

import { Config } from "../types/config";
import { Story } from "../types/story";

export const getVisualStoryImgConfig = (config: Config, story: Story) => {
  const visualStoriesConfig = get(config, ["opts", "featureConfig", "visualStories"]) || [];
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

export const getVisualStoryTextConfig = (config: Config, story: Story) => {
  const visualStoriesConfig = get(config, ["opts", "featureConfig", "visualStories"]) || [];
  const visualStoryTheme = get(story, ["metadata", "story-attributes", "visualstorytheme"]) || [];
  const theme = visualStoryTheme[0];
  switch (theme) {
    case "theme-2":
      const themeConfig2 = visualStoriesConfig[1];
      const textFeatCfg2 = get(themeConfig2, ["animation", "text"]) || {};
      return {
        ...(textFeatCfg2.animateIn && { "animate-in": textFeatCfg2.animateIn }),
        ...(textFeatCfg2.animateInDelay && { "animate-in-delay": textFeatCfg2.animateInDelay }),
        ...(textFeatCfg2.animateInDuration && { "animate-in-duration": textFeatCfg2.animateInDuration })
      };
    case "theme-3":
      const themeConfig3 = visualStoriesConfig[2];
      const textFeatCfg3 = get(themeConfig3, ["animation", "text"]) || {};
      return {
        ...(textFeatCfg3.animateIn && { "animate-in": textFeatCfg3.animateIn }),
        ...(textFeatCfg3.animateInDelay && { "animate-in-delay": textFeatCfg3.animateInDelay }),
        ...(textFeatCfg3.animateInDuration && { "animate-in-duration": textFeatCfg3.animateInDuration })
      };
    default:
      const themeConfig = visualStoriesConfig[0];
      const textFeatCfg = get(themeConfig, ["animation", "text"]) || {};
      return {
        ...(textFeatCfg.animateIn && { "animate-in": textFeatCfg.animateIn }),
        ...(textFeatCfg.animateInDelay && { "animate-in-delay": textFeatCfg.animateInDelay }),
        ...(textFeatCfg.animateInDuration && { "animate-in-duration": textFeatCfg.animateInDuration })
      };
  }
};
