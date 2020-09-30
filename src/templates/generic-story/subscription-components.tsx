// This file should not exist. Move all components inside appropriate atoms/molecules

import React from "react";
import get from "lodash.get";
import { StoryElement } from "../../atoms";
import { Fragment } from "react";
import { BodyAd } from "../../molecules/ads";
import { withStoryAndConfig } from "../../context";
import { StoryPageSlots } from "../../molecules/slots";

const { DefaultStoryCardSlot } = StoryPageSlots;

const StoryCardsWithSubscriptionsBase = ({ story, config }) => {
  // find a better name than StoryCardsWithSubscriptionsBase
  const isStoryBehindPaywall = story.access === "subscription";
  const grantReason = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "grantReason"],
    "SUBSCRIBER"
  );
  const granted = get(
    config,
    ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "granted"],
    true
  );
  const hardPaywallAccessGranted = granted === true;
  const isMeteredStory = grantReason === "METERING";
  const isHardPaywallStory = grantReason === "SUBSCRIBER";


  // Renders only the first card with a paywall and if subscribed shows the other remaining cards
  const HardPaywallStoryContent = () => {
    const cardsVisibleInBlockedStory = get(
      config,
      ["publisherConfig", "layout", "no-of-visible-cards-in-a-blocked-story"]
    ) || 1;
    const visibleStoryCards = story.cards.slice(0, cardsVisibleInBlockedStory); // To pick up the first card of the story
    const storyCardsBehindPaywall = story.cards.slice(cardsVisibleInBlockedStory); // To pick up the remaining cards which are behind the paywall
    // Picked up first card to shown
    const visibleCards = visibleStoryCards.map((card) => (
      <Fragment key={card.id}>
        {card["story-elements"].map((element) => (
          <StoryElement key={element.id} element={element} />
        ))}
      </Fragment>
    ));
    // Picked up remaining cards are wrapped with section tag which has the attribute and className. These are mandatory for the content to be picked up by the Amp runtime.
    const cardsBehindPaywall = (
      <section className="paywall" subscriptions-section="content">
        {storyCardsBehindPaywall.map((card) => {
          return (
            <Fragment key={card.id}>
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
        { visibleCards}
        { hardPaywallAccessGranted && cardsBehindPaywall}
      </Fragment >
    );
  };

  // Renders all the cards in the story
  const FullStory = () => {
    return story.cards.map((card, cardIdx) => {
      return <Fragment key={card.id}>
        {card["story-elements"].map((element) => (
          <StoryElement key={element.id} element={element} />
        ))}
        {cardIdx === 0 && <BodyAd />}
        <DefaultStoryCardSlot index={cardIdx} card={card} />
      </Fragment>;
    })
  };


  if (!isStoryBehindPaywall || isMeteredStory) { // If a story is not behind paywall or if it a metered story then all the cards are shown
    return <FullStory />
  } else if (isHardPaywallStory || !hardPaywallAccessGranted) {  // If a story is behind hard paywall
    return <HardPaywallStoryContent />
  } else return <div>Something is wrong.</div>; // If something goes wrong
};

export const StoryCardsWithSubscriptions = withStoryAndConfig(StoryCardsWithSubscriptionsBase);
