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
  // const isMeteredStory = grantReason === "METERING";
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

  // if (!isStoryBehindPaywall || isMeteredStory) {
  //   // If a story is not behind paywall or if it a metered story then all the cards are shown
  //   return <FullStoryContent story={story} />;
  // } else if (isHardPaywallStory || !hardPaywallAccessGranted) {
  //   // If a story is behind hard paywall
  //   return <HardPaywallStoryContent story={story} config={config} />;
  // }
};

export const StoryCardsWithSubscriptions = withStoryAndConfig(StoryCardsWithSubscriptionsBase);
