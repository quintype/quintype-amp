import React, { Fragment } from "react";
import get from "lodash.get";
import { withStoryAndConfig } from "../../context";
import { FullStoryContent } from "../full-story-content";
import { HardPaywallStoryContent } from "../hard-paywall-story-content";
import { MeteredPaywall, SubscriberAccessPaywall } from "../../atoms";
import { subscriptionsEnabled } from "../../atoms/subscriptions/subscriptions.helpers";

const StoryCardsWithSubscriptionsBase = ({ story, config }) => {
  // find a better name than StoryCardsWithSubscriptionsBase
  const isStoryBehindPaywall = story.access === "subscription" && subscriptionsEnabled(story, config);

  // tslint:disable-next-line:no-shadowed-variable
  const isReasonGranted = (story, config): string => {
    const grantedReasonFunction = get(
      config,
      ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "grantReason"],
      "SUBSCRIBER"
    );
    const grantedReason = grantedReasonFunction && grantedReasonFunction({ story, config });
    return grantedReason;
  };
  // tslint:disable-next-line:no-shadowed-variable
  const isGranted = (story, config): boolean => {
    const grantedFunction = get(
      config,
      ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "granted"],
      true
    );
    const granted = grantedFunction && grantedFunction({ story, config });
    return !!granted;
  };

  const hardPaywallAccessGranted = isGranted(story, config) === true;
  const isHardPaywallStory = isReasonGranted(story, config) === "SUBSCRIBER";

  let storyContent;
  if (isHardPaywallStory || !hardPaywallAccessGranted)
    storyContent = <HardPaywallStoryContent story={story} config={config} />;
  else storyContent = <FullStoryContent story={story} config={config} />;

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
