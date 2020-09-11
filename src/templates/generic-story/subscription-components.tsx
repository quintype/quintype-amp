// This file should not exist. Move all components inside appropriate atoms/molecules

import React from "react";
import get from "lodash.get";
import { StoryElement } from "../../atoms";
import { Fragment } from "react";
import { BodyAd } from "../../molecules/ads";
import { withStoryAndConfig } from "../../context";

const StoryCardsWithSubscriptionsBase = ({ story, config }) => {
  // find a better name than StoryCardsWithSubscriptionsBase
  const isStoryBehindPaywall = story.access === "subscription";
  const grantReason = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "grantReason"],
    null
  );
  const granted = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "granted"],
    null
  );
  const hardPaywallAccessGranted = granted === true;
  const isMeteredStory = grantReason === "METERING";
  const isHardPaywallStory = grantReason === "SUBSCRIBER";
  console.log(isHardPaywallStory, "<---isHardPaywallStory");
  if (!isStoryBehindPaywall || isMeteredStory) {
    return story.cards.map((card, cardIdx) => {
      return (
        <Fragment key={card.id}>
          <p>metered story</p>
          {card["story-elements"].map((element) => (
            <StoryElement key={element.id} element={element} />
          ))}
          {cardIdx === 0 && <BodyAd />}
        </Fragment>
      );
    });
  } else if (isHardPaywallStory) {
    const cardsVisibleInBlockedStory = get(
      config,
      ["publisherConfig", "layout", "no-of-visible-cards-in-a-blocked-story"]
    ) || 1;
    const visibleStoryCards = story.cards.slice(0, cardsVisibleInBlockedStory);
    const storyCardsBehindPaywall = story.cards.slice(cardsVisibleInBlockedStory);

    const visibleCards = visibleStoryCards.map((card) => (
      <Fragment key={card.id}>
        <p>visibleCards</p>
        {card["story-elements"].map((element) => (
          <StoryElement key={element.id} element={element} />
        ))}
      </Fragment>
    ));
    const cardsBehindPaywall = (
      <section className="paywall" subscriptions-section="content">
        {storyCardsBehindPaywall.map((card) => {
          return (
            <Fragment key={card.id}>
              <p>cardsBehindPaywall</p>
              {card["story-elements"].map((element) => (
                <StoryElement key={element.id} element={element} />
              ))}
            </Fragment>
          );
        })}
      </section>
    );
    return (
      <Fragment>
        <p>hardpaywall</p>
        {visibleCards}
        {hardPaywallAccessGranted && cardsBehindPaywall}
      </Fragment>
    );
  } else return <div>Something is wrong.</div>;
};

export const StoryCardsWithSubscriptions = withStoryAndConfig(StoryCardsWithSubscriptionsBase);
