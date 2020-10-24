import React, { Fragment } from "react";
import { FullStoryContent } from "../full-story-content";
import { StoryCardsWithSubscriptions } from "../subscription-components";
import get from "lodash/get";
import { withStoryAndConfig } from "../../context";

const StoryCardsBase = ({ story, config }) => {
  const subscriptionEnabled = get(config, ["opts", "featureConfig", "subscriptions"]);
  return (
    <Fragment>
      {subscriptionEnabled ? (
        <StoryCardsWithSubscriptions story={story} config={config} />
      ) : (
        <FullStoryContent story={story} />
      )}
    </Fragment>
  );
};

export const StoryCards = withStoryAndConfig(StoryCardsBase);
