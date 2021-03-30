import React, { Fragment } from "react";
import get from "lodash.get";
import { withStoryAndConfig } from "../../context";
import { FullStoryContent } from "../full-story-content";
import { HardPaywallStoryContent } from "../hard-paywall-story-content";
import { MeteredPaywall, SubscriberAccessPaywall } from "../../atoms";

const StoryCardsWithSubscriptionsBase = ({ story, config }) => {
  // find a better name than StoryCardsWithSubscriptionsBase
  const isStoryBehindPaywall = story.access === "subscription";
  const grantReason = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "grantReason"],
    "SUBSCRIBER"
  );
  const granted = get(config, ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "granted"], true);
  const hardPaywallAccessGranted = granted === true;
  const isHardPaywallStory = grantReason === "SUBSCRIBER";
  let storyContent;
  if (isHardPaywallStory || !hardPaywallAccessGranted)
    storyContent = <HardPaywallStoryContent story={story} config={config} />;
  else storyContent = <FullStoryContent story={story} />;

  return (
    <Fragment>
      {storyContent}
      {isStoryBehindPaywall && (
        <Fragment>
          <MeteredPaywall config={config} />
          <SubscriberAccessPaywall config={config} />
        </Fragment>
      )}
    </Fragment>
  );
};

export const StoryCardsWithSubscriptions = withStoryAndConfig(StoryCardsWithSubscriptionsBase);
