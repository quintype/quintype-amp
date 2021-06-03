import React from "react";
import { AmpStoryPageTypes } from "./types";
import get from "lodash.get";
import { withStoryAndConfig } from "../../../context";

export const AmpStoryPageBase = ({ config, story, children, ...props }: AmpStoryPageTypes) => {
  let autoAdvanceAfter = get(config, ["opts", "featureConfig", "visualStories", "autoAdvanceAfter"], null);

  const visualStoriesConfig = get(config, ["opts", "featureConfig", "visualStories"]) || [];
  if (Array.isArray(visualStoriesConfig)) {
    const visualStoryTheme = get(story, ["metadata", "story-attributes", "visualstorytheme"]) || [];
    const theme = visualStoryTheme[0];
    switch (theme) {
      case "theme-2":
        autoAdvanceAfter = visualStoriesConfig[1] && visualStoriesConfig[1].autoAdvanceAfter;
        break;
      case "theme-3":
        autoAdvanceAfter = visualStoriesConfig[2] && visualStoriesConfig[2].autoAdvanceAfter;
        break;
      default:
        autoAdvanceAfter = visualStoriesConfig[0] && visualStoriesConfig[0].autoAdvanceAfter;
    }
  }
  return (
    <amp-story-page auto-advance-after={autoAdvanceAfter} {...props}>
      {children}
    </amp-story-page>
  );
};

export const AmpStoryPage = withStoryAndConfig(AmpStoryPageBase);
