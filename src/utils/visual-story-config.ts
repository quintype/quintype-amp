import { isEmpty } from "./../molecules/ads/shared/helpers/index";
import get from "lodash.get";

import { Config } from "../types/config";
import { Story } from "../types/story";

export const getAnimation = (imageConfig, textConfig) => {
  return {
    imageAnimation: {
      ...(imageConfig.animateIn && { "animate-in": imageConfig.animateIn }),
      ...(imageConfig.animateInDelay && { "animate-in-delay": imageConfig.animateInDelay }),
      ...(imageConfig.animateInDuration && { "animate-in-duration": imageConfig.animateInDuration })
    },
    textAnimation: {
      ...(textConfig.animateIn && { "animate-in": textConfig.animateIn }),
      ...(textConfig.animateInDelay && { "animate-in-delay": textConfig.animateInDelay }),
      ...(textConfig.animateInDuration && { "animate-in-duration": textConfig.animateInDuration })
    }
  };
};

export const getTheme = (story) => {
  const visualStoryTheme = get(story, ["metadata", "story-attributes", "visualstorytheme"]) || [];
  return visualStoryTheme[0];
};

const getAnimationConfig = (config, value, defaultObj) => {
  return !isEmpty(get(config, ["animation", value], {})) ? get(config, ["animation", value]) : defaultObj;
};

export const getVisualStoryConfig = (config: Config, story: Story) => {
  const visualStoriesConfig = get(config, ["opts", "featureConfig", "visualStories"]) || [];
  switch (getTheme(story)) {
    case "theme-2":
      const themeConfig2 = visualStoriesConfig[1];
      const imgAnimationFeatCfg2 = getAnimationConfig(themeConfig2, "image", {
        animateIn: "zoom-out",
        animateInDuration: "15s",
        animateInDelay: "1s"
      });
      const textFeatCfg2 = getAnimationConfig(themeConfig2, "text", {
        animateIn: "fly-in-bottom",
        animateInDuration: "1s",
        animateInDelay: "1s"
      });
      return getAnimation(imgAnimationFeatCfg2, textFeatCfg2);
    case "theme-3":
      const themeConfig3 = visualStoriesConfig[2];
      const imgAnimationFeatCfg3 = getAnimationConfig(themeConfig3, "image", {
        animateIn: "fade-in",
        animateInDuration: "10s",
        animateInDelay: "1s"
      });
      const textFeatCfg3 = getAnimationConfig(themeConfig3, "text", {
        animateIn: "fly-in-left",
        animateInDuration: "2s",
        animateInDelay: "1s"
      });
      return getAnimation(imgAnimationFeatCfg3, textFeatCfg3);
    default:
      const themeConfig = visualStoriesConfig[0];
      const imgAnimationFeatConfig = getAnimationConfig(themeConfig, "image", {
        animateIn: "zoom-in",
        animateInDuration: "10s",
        animateInDelay: "1s"
      });
      const textFeatCfg = get(themeConfig, ["animation", "text"]) || {};
      return getAnimation(imgAnimationFeatConfig, textFeatCfg);
  }
};

export const getVisualStoryBookendUrl = (config: Config, story: Story) => {
  const visualStoriesConfig = get(config, ["opts", "featureConfig", "visualStories"]) || null;

  if (!Array.isArray(visualStoriesConfig)) {
    return get(config, ["opts", "featureConfig", "visualStories", "bookendUrl"], "/amp/api/v1/bookend.json");
  }

  switch (getTheme(story)) {
    case "theme-2":
      const themeConfig2 = visualStoriesConfig[1] || {};
      return themeConfig2.bookendUrl || "/amp/api/v1/bookend.json";
    case "theme-3":
      const themeConfig3 = visualStoriesConfig[2] || {};
      return themeConfig3.bookendUrl || "/amp/api/v1/bookend.json";
    default:
      const themeConfig = visualStoriesConfig[0] || {};
      return themeConfig.bookendUrl || "/amp/api/v1/bookend.json";
  }
};

export const getVisualStoryAdsSlot = (config: Config, story: Story) => {
  const visualStoriesConfig = get(config, ["opts", "featureConfig", "visualStories"]) || null;

  if (!Array.isArray(visualStoriesConfig)) {
    return get(config, ["opts", "featureConfig", "visualStories", "ads", "doubleclick", "dataSlot"], null);
  }

  switch (getTheme(story)) {
    case "theme-2":
      const themeConfig2 = visualStoriesConfig[1] || {};
      return themeConfig2.ads?.doubleclick?.dataSlot;
    case "theme-3":
      const themeConfig3 = visualStoriesConfig[2] || {};
      return themeConfig3.ads?.doubleclick?.dataSlot;
    default:
      const themeConfig = visualStoriesConfig[0] || {};
      return themeConfig.ads?.doubleclick?.dataSlot;
  }
};
