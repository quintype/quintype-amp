import React, { Fragment } from "react";
import { FullStoryContent } from "../full-story-content";
import { StoryCardsWithSubscriptions } from "../subscription-components";
import { withStoryAndConfig } from "../../context";
import { subscriptionsEnabled } from "../../atoms/subscriptions/subscriptions.helpers";

const StoryCardsBase = ({ story, config }) => {
  return (
    <Fragment>
      {subscriptionsEnabled(story, config) ? (
        <StoryCardsWithSubscriptions story={story} config={config} />
      ) : (
        <FullStoryContent story={story} />
      )}
    </Fragment>
  );
};

export const StoryCards = withStoryAndConfig(StoryCardsBase);
