// This file should not exist. Move all components inside appropriate atoms/molecules

import React from "react";
import get from "lodash.get";
import { StoryElement } from "../../atoms";
import { Fragment } from "react";
import { BodyAd } from "../../molecules/ads";
import { StoryPageSlots } from "../../molecules/slots";

const { DefaultStoryCardSlot } = StoryPageSlots;

// Renders only the first card with a paywall and if subscribed shows the other remaining cards
export const HardPaywallStoryContent = ({ story, config }) => {
    if (!get(
        config,
        ["opts", "featureConfig", "subscriptions"])) {
        return null;
    }
    const granted = get(
        config,
        ["opts", "featureConfig", "subscriptions", "fallbackEntitlement", "granted"],
        true
    );
    const hardPaywallAccessGranted = granted === true;
    const cardsVisibleInBlockedStory = get(
        config,
        ["publisherConfig", "layout", "no-of-visible-cards-in-a-blocked-story"]
    ) || 1;

    const visibleStoryCards = story.cards.slice(0, cardsVisibleInBlockedStory); // To pick up the first card of the story
    const storyCardsBehindPaywall = story.cards.slice(cardsVisibleInBlockedStory); // To pick up the remaining cards which are behind the paywall


    // Picked up first card to shown
    const visibleCards = visibleStoryCards.map((card, cardIdx) => (
        <Fragment key={card.id}>
            {card["story-elements"].map((element) => (
                <StoryElement key={element.id} element={element} />
            ))}
            {cardsVisibleInBlockedStory !== 0 && cardIdx === 0 && <BodyAd />}
            <DefaultStoryCardSlot index={cardIdx} card={card} />
        </Fragment>
    ));


    // Picked up remaining cards are wrapped with section tag which has the attribute and className. These are mandatory for the content to be picked up by the Amp runtime.
    const cardsBehindPaywall = (
        <section className="paywall" subscriptions-section="content">
            {storyCardsBehindPaywall.map((card, cardIdx) => {
                return (
                    <Fragment key={card.id}>
                        {card["story-elements"].map((element) => (
                            <StoryElement key={element.id} element={element} />
                        ))}
                        {cardsVisibleInBlockedStory === 0 && cardIdx === 0 && <BodyAd />}
                        <DefaultStoryCardSlot index={cardIdx} card={card} />
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
