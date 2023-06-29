import React from "react";
import get from "lodash.get";
import { StoryElement } from "../../atoms";
import { Fragment } from "react";
import { BodyAd } from "../../molecules/ads";
import { StoryPageSlots } from "../../molecules/slots";
import { subscriptionsEnabled } from "../../atoms/subscriptions/subscriptions.helpers";

const { DefaultStoryCardSlot } = StoryPageSlots;

export const HardPaywallStoryContent = ({ story, config }) => {
  if (!subscriptionsEnabled(story, config)) return null;

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
  const cardsVisibleInBlockedStory =
    get(config, ["publisherConfig", "layout", "no-of-visible-cards-in-a-blocked-story"]) || 1;

  const visibleStoryCards = story.cards.slice(0, cardsVisibleInBlockedStory);
  const storyCardsBehindPaywall = story.cards.slice(cardsVisibleInBlockedStory);

  const visibleCards = visibleStoryCards.map((card, cardIdx) => (
    <Fragment key={card.id}>
      {card["story-elements"].map((element, storyElementIdx) => (
        <StoryElement key={element.id} element={element} cardIdx={cardIdx} storyElementIdx={storyElementIdx} />
      ))}
      {cardIdx === 0 && <BodyAd />}
      <DefaultStoryCardSlot index={cardIdx} card={card} />
    </Fragment>
  ));

  const cardsBehindPaywall = (
    <section className="paywall" subscriptions-section="content">
      {storyCardsBehindPaywall.map((card, cardIdx) => {
        const computedIdx = cardsVisibleInBlockedStory + cardIdx;
        return (
          <Fragment key={card.id}>
            {card["story-elements"].map((element, storyElementIdx) => (
              <StoryElement
                key={element.id}
                element={element}
                cardIdx={computedIdx}
                storyElementIdx={storyElementIdx}
              />
            ))}
            {computedIdx === 0 && <BodyAd />}
            <DefaultStoryCardSlot index={computedIdx} card={card} />
          </Fragment>
        );
      })}
    </section>
  );

  return (
    <Fragment>
      {visibleCards}
      {hardPaywallAccessGranted && cardsBehindPaywall}
    </Fragment>
  );
};
