import React from "react";
import { AmpStoryPageTypes } from "./types";
import get from "lodash.get";
import { withStoryAndConfig } from "../../../context";

export const AmpStoryPageBase = ({ config, story, children, ...props }: AmpStoryPageTypes) => {
  const autoAdvanceAfter = get(config, ["opts", "featureConfig", "visualStories", "autoAdvanceAfter"], null);

  return (
    <amp-story-page auto-advance-after={autoAdvanceAfter} {...props}>
      {children}
    </amp-story-page>
  );
};

export const AmpStoryPage = withStoryAndConfig(AmpStoryPageBase);
